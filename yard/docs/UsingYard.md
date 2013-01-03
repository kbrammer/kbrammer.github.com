# @title Using Yard

# Using Yard

## Generating Documentation

* Define documents and options in a local file named .yardopts:
* Command to generate docs using above config: `yarddoc --debug --plugin docs/templates/plugin.rb`
* Modify menu list items - changed File List to Page List here:
  * `layout\setup.rb`
  * `layout\html\files.erb`
  * `fulldoc\html\setup.rb`

**.yardopts**

~~~
    -o html
    -plugin docs/templates/plugin.rb
    --asset docs/images:images
    --exclude docs/templates
    -
    docs/WebDevelopment.md
    docs/UsingYard.md
~~~


**Usage**

~~~
    Usage: yard doc [options] [source_files [- extra_files]]
    (if a list of source files is omitted,
      {lib,app}/**/*.rb ext/**/*.c is used.)

    Example: yardoc -o documentation/ - FAQ LICENSE
      The above example outputs documentation for files in
      lib/**/*.rb to documentation/ including the extra files
      FAQ and LICENSE.

    A base set of options can be specified by adding a .yardopts
    file to your base path containing all extra options separated
    by whitespace.

    General Options:
	-b, --db FILE                    Use a specified .yardoc db to load from or save to
					   (defaults to .yardoc)
	    --[no-]single-db             Whether code objects should be stored to single
					   database file (advanced)
	-n, --no-output                  Only generate .yardoc database, no documentation.
	-c, --use-cache [FILE]           Use the cached .yardoc db to generate documentation.
					   (defaults to no cache)
	    --no-cache                   Clear .yardoc db before parsing source.
	    --[no-]yardopts [FILE]       If arguments should be read from FILE
					   (defaults to yes, FILE defaults to .yardopts)
	    --[no-]document              If arguments should be read from .document file.
					   (defaults to yes)
	    --no-save                    Do not save the parsed data to the yardoc db
	    --exclude REGEXP             Ignores a file if it matches path match (regexp)

    Output options:
	    --one-file                   Generates output as a single file
	    --list                       List objects to standard out (implies -n)
	    --no-public                  Don't show public methods. (default shows public)
	    --protected                  Show protected methods. (default hides protected)
	    --private                    Show private methods. (default hides private)
	    --no-private                 Hide objects with @private tag
	    --[no-]api API               Generates documentation for a given API
					 (objects which define the correct @api tag).
					 If --no-api is given, displays objects with
					 no @api tag.
	    --embed-mixins               Embeds mixin methods into class documentation
	    --embed-mixin [MODULE]       Embeds mixin methods from a particular
					  module into class documentation
	    --no-highlight               Don't highlight code blocks in output.
	    --default-return TYPE        Shown if method has no return type.
					   (defaults to 'Object')
	    --hide-void-return           Hides return types specified as 'void'.
					   (default is shown)
	    --query QUERY                Only show objects that match a specific query
	    --title TITLE                Add a specific title to HTML documents
	-r, --readme, --main FILE        The readme file used as the title page
					   of documentation.
	    --files FILE1,FILE2,...      Any extra comma separated static files to be
					   included (eg. FAQ)
	    --asset FROM[:TO]            A file or directory to copy over to output
					   directory after generating
	-o, --output-dir PATH            The output directory. (defaults to ./doc)
	-m, --markup MARKUP              Markup style used in documentation, like textile,
					   markdown or rdoc. (defaults to rdoc)
	-M MARKUP_PROVIDER,              Overrides the library used to process markup
	    --markup-provider              formatting (specify the gem name)
	    --charset ENC                Character set to use when parsing files
					   (default is system locale)
	-t, --template TEMPLATE          The template to use. (defaults to "default")
	-p, --template-path PATH         The template path to look for templates in.
					   (used with -t).
	-f, --format FORMAT              The output format for the template.
					   (defaults to html)
	    --no-stats                   Don't print statistics
	    --locale LOCALE              The locale for generated documentation.
					   (defaults to en)
	    --po-dir DIR                 The directory that has .po files.
					   (defaults to #{YARD::Registry.po_dir})

    Tag options: (TAG:TITLE looks like: 'overload:Overloaded Method')
	    --tag TAG:TITLE              Registers a new free-form metadata @tag
	    --type-tag TAG:TITLE         Tag with an optional types field
	    --type-name-tag TAG:TITLE    Tag with optional types and a name field
	    --name-tag TAG:TITLE         Tag with a name field
	    --title-tag TAG:TITLE        Tag with first line as title field
	    --hide-tag TAG               Hides a previously defined tag from templates
	    --transitive-tag TAG         Marks a tag as transitive
	    --non-transitive-tag TAG     Marks a tag as not transitive

    Other options:
	-e, --load FILE                  A Ruby script to load before running command.
	    --plugin PLUGIN              Load a YARD plugin (gem with `yard-' prefix)
	    --legacy                     Use old style Ruby parser and handlers.
					   Always on in 1.8.x.
	    --safe                       Enable safe mode for this instance
	-q, --quiet                      Show no warnings.
	    --verbose                    Show more information.
	    --debug                      Show debugging information.
	    --backtrace                  Show stack traces
	-v, --version                    Show version.
	-h, --help                       Show this help.
~~~
