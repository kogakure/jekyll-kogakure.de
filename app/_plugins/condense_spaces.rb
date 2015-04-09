# A condense spaces plugin for Jekyll
#
# Taken from Octopress

require 'liquid'

module CondenseSpacesFilter

  # Return the element's text after applying the filter
  def condense_spaces(input)
    input.gsub(/\s{2,}/, ' ')
  end

end

Liquid::Template.register_filter(CondenseSpacesFilter)
