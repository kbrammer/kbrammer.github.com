# @title Web Development

#  Web Development

## Links

* [Travis Ruby Client](https://github.com/travis-ci/travis-ruby-client)

## Environment

### Local Web Preview using Sinatra

* [Sinatra Intro](http://www.sinatrarb.com/intro)
* [Real World Apps](http://sinatra-book.gittr.com/#real_world_applications_in_sinatra)
* Run sinatra.rb to return views/index.erb

### CSS Generation with Sass

* install sass: `gem install sass`
* change to css directory: `cd ./assets/css/`
* watch stylesheet: `sass --watch styles.scss:style.css`
* watch entire directory: `sass --watch css/sass:css/compiled`

### Zurb Foundation
* [](http://foundation.zurb.com/docs/compass.php)
* [Compass](http://foundation.zurb.com/docs/compass.php)
* `compass create <project-name> -r zurb-foundation --using foundation`

~~~
    Congratulations! Your compass project has been created.

    You may now add and edit sass stylesheets in the sass subdirectory of your project.

    Sass files beginning with an underscore are called partials and won't be
    compiled to CSS, but they can be imported into other sass stylesheets.

    You can configure your project by editing the config.rb configuration file.

    You must compile your sass stylesheets into CSS when they change.
    This can be done in one of the following ways:
      1. To compile on demand:
	 compass compile [path/to/project]
      2. To monitor your project for changes and automatically recompile:
	 compass watch [path/to/project]

    More Resources:
      * Website: http://compass-style.org/
      * Sass: http://sass-lang.com
      * Community: http://groups.google.com/group/compass-users/



    w00t! You're using ZURB Foundation, now go forth and rock 'n roll!


    To import your new stylesheets add the following lines of HTML (or equivalent) to your webpage:
    <head>
      <link href="/stylesheets/app.css" media="screen, projector, print" rel="stylesheet" type="text/css
    " />
    </head>
~~~
