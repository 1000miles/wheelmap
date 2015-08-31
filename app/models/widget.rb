class Widget
  def initialize(sections)
    @active_index = 0
    @sections = sections
  end

  def has?(section)
    index(section) != nil
  end

  def activate(section)
    new_index = index!(section)

    @active_index = new_index
  end

  def index(section)
    @sections.index(section)
  end

  def index!(section)
    other_index = index(section)

    if other_index == nil
      raise "Unknown section: #{section}"
    end

    other_index
  end

  def active
    @sections[@active_index]
  end

  def next
    new_index = @active_index + 1

    @sections[new_index]
  end

  def sections
    @sections
  end

  def done?(section)
    index!(section) < @active_index
  end

  def active?(section)
    index!(section) == @active_index
  end
end