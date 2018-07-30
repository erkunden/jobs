var fluentj = require("fluentj");

fluentj.run("kernel",function() {
  fluent.print("Welcome to Jobs OSI");
  fluent.print("Open source, simple to use, made with JavaScript and Shell.");
  fluent.run("./system.sh")
});
