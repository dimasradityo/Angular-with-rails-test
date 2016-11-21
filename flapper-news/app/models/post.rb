class Post < ApplicationRecord
    has_many :comments

    def as_json(option = {})
        super(options.merge(include: :comments))
    end
end
