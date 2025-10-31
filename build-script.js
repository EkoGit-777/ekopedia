import fs from "fs-extra";
import path from "path";

const vuepressDir = path.resolve("src/.vuepress");
const distPath = path.join(vuepressDir, "dist");
const tmpPath = path.join(vuepressDir, "tmp");
const gitPath = path.join(distPath, ".git");
const tmpGitPath = path.join(tmpPath, ".git");

fs.ensureDirSync(tmpPath);

if (fs.existsSync(gitPath)) {
  console.log("🔁 Moving .git to temp...");
  fs.moveSync(gitPath, tmpGitPath, { overwrite: true });
}

try {
  // Run VuePress build synchronously
  const { execSync } = await import("child_process");
  execSync("npx vuepress-vite build src", { stdio: "inherit" });
} finally {
  if (fs.existsSync(tmpGitPath)) {
    console.log("✅ Restoring .git to dist...");
    fs.moveSync(tmpGitPath, gitPath, { overwrite: true });
    fs.removeSync(tmpPath);
  }
}
