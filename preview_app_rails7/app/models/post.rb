class Post < ApplicationRecord
  # has_one_attached :image
  has_many_attached :images
  validates :text, presence: true
  validates :images, presence: true
  validates :images, length: { minimum: 1, maximum: 5, message: "は1枚以上5枚以下にしてください" }
end

end
