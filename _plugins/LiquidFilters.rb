module JekyllLiquidFilters

# Removes trailing forward slash from a string for easily appending url segments
  def strip_slash(input)
    if input =~ /(.+)\/$|^\/$/
      input = $1
    end
    input
  end

  def test(input)
    input + "foo/"
  end

end
Liquid::Template.register_filter JekyllLiquidFilters
