SET RUBY_BIN=C:\Ruby193\bin\

REM Add RUBY_BIN to the PATH
REM RUBY_BIN takes higher priority to avoid other tools
REM conflict with our own (mainly the DevKit)
SET PATH=%RUBY_BIN%;%PATH%
SET RUBY_BIN=

REM Display Ruby version
ruby.exe -v
jekyll

PAUSE
