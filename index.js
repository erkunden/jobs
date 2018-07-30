var fluentj = require("fluentj");

fluentj.use("jobs",function() {
  fluentj.run("path_=$(dirname $0)");
  fluentj.run("cd",["$path_"});
  fluentj.run("node",["kernel.js"])
});
