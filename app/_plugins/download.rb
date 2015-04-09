#
# Author: Stefan Imhoff
#
# Outputs a link to a file download in an container
#
#   {% download my-file-name.zip "This is my file" %}

module Jekyll

  class DownloadTag < Liquid::Tag
    TextWithLink = /(.+)\s"(.+?)"/i

    def initialize(tag_name, markup, tokens)
      @link = nil
      @text = nil

      if markup.strip =~ TextWithLink
        @link = $1
        @text = $2
      end
      super
    end

    def render(context)
      "<abbr class=\"download\">\n<p><a href=\"#{@link}\">#{@text}</a></p>\n</abbr>"
    end
  end
end

Liquid::Template.register_tag('download', Jekyll::DownloadTag)
