# @title Microsoft (R) Visual C# Compiler

# Microsoft (R) Visual C# Compiler
## Visual C# Compiler Options

* Command line compilation: `csc.exe /out:"D:\Temporary\myfile.exe" $(FULL_CURRENT_PATH)`
* [NuGet PowerShell Reference](http://docs.nuget.org/docs/reference/package-manager-console-powershell-reference)
* [NuGet markdown documentation generator](https://github.com/NuGet/NuGetDocs/)
* [PowerShell Package Manager](http://vibrantcode.com/blog/2011/2/10/nuget-powershell-also-crazy-delicious.html/)

**help csc**

~~~
Microsoft (R) Visual C# Compiler version 4.0.30319.17929

for Microsoft (R) .NET Framework 4.5
Copyright (C) Microsoft Corporation. All rights reserved.

                        Visual C# Compiler Options

                        - OUTPUT FILES -
/out:<file>                    Specify output file name (default: base name of file with main class or first file)
/target:exe                    Build a console executable (default) (Short form: /t:exe)
/target:winexe                 Build a Windows executable (Short form: /t:winexe)
/target:library                Build a library (Short form: /t:library)
/target:module                 Build a module that can be added to another assembly (Short form: /t:module)
/target:appcontainerexe        Build an Appcontainer executable (Short form: /t:appcontainerexe)
/target:winmdobj               Build a Windows Runtime intermediate file that is consumed by WinMDExp (Short form: /t:winmdobj)
/doc:<file>                    XML Documentation file to generate
/platform:<string>             Limit which platforms this code can run on: x86, Itanium, x64, arm, anycpu32bitpreferred, or anycpu. The default is anycpu.

                        - INPUT FILES -
/recurse:<wildcard>            Include all files in the current directory and subdirectories according to the wildcard specifications
/reference:<alias>=<file>      Reference metadata from the specified assembly file using the given alias (Short form: /r)
/reference:<file list>         Reference metadata from the specified assembly files (Short form: /r)
/addmodule:<file list>         Link the specified modules into this assembly
/link:<file list>              Embed metadata from the specified interop assembly files (Short form: /l)

                        - RESOURCES -
/win32res:<file>               Specify a Win32 resource file (.res)
/win32icon:<file>              Use this icon for the output
/win32manifest:<file>          Specify a Win32 manifest file (.xml)
/nowin32manifest               Do not include the default Win32 manifest
/resource:<resinfo>            Embed the specified resource (Short form: /res)
/linkresource:<resinfo>        Link the specified resource to this assembly (Short form: /linkres)
                               Where the resinfo format is <file>[,<string name>[,public|private]]

                        - CODE GENERATION -
/debug[+|-]                    Emit debugging information
/debug:{full|pdbonly}          Specify debugging type ('full' is default, and enables attaching a debugger to a running program)
/optimize[+|-]                 Enable optimizations (Short form: /o)

                        - ERRORS AND WARNINGS -
/warnaserror[+|-]              Report all warnings as errors
/warnaserror[+|-]:<warn list>  Report specific warnings as errors
/warn:<n>                      Set warning level (0-4) (Short form: /w)
/nowarn:<warn list>            Disable specific warning messages

                        - LANGUAGE -
/checked[+|-]                  Generate overflow checks
/unsafe[+|-]                   Allow 'unsafe' code
/define:<symbol list>          Define conditional compilation symbol(s) (Short form: /d)
/langversion:<string>          Specify language version mode: ISO-1, ISO-2, 3, 4, 5, or Default

                        - SECURITY -
/delaysign[+|-]                Delay-sign the assembly using only the public portion of the strong name key
/keyfile:<file>                Specify a strong name key file
/keycontainer:<string>         Specify a strong name key container
/highentropyva[+|-]            Enable high-entropy ASLR

                        - MISCELLANEOUS -
@<file>                        Read response file for more options
/help                          Display this usage message (Short form: /?)
/nologo                        Suppress compiler copyright message
/noconfig                      Do not auto include CSC.RSP file

                        - ADVANCED -
/baseaddress:<address>         Base address for the library to be built
/bugreport:<file>              Create a 'Bug Report' file
/codepage:<n>                  Specify the codepage to use when opening source files
/utf8output                    Output compiler messages in UTF-8 encoding
/main:<type>                   Specify the type that contains the entry point (ignore all other possible entry points) (Short form: /m)
/fullpaths                     Compiler generates fully qualified paths
/filealign:<n>                 Specify the alignment used for output file sections
/pdb:<file>                    Specify debug information file name (default: output file name with .pdb extension)
/errorendlocation              Output line and column of the end location of each error
/preferreduilang               Specify the preferred output language name.
/nostdlib[+|-]                 Do not reference standard library (mscorlib.dll)
/subsystemversion:<string>     Specify subsystem version of this assembly
/lib:<file list>               Specify additional directories to search in for references
/errorreport:<string>          Specify how to handle internal compiler errors: prompt, send, queue, or none. The default is queue.
/appconfig:<file>              Specify an application configuration file containing assembly binding settings
/moduleassemblyname:<string>   Name of the assembly which this module will be a part of

~~~
