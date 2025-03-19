class Post < ApplicationRecord
  # has_one_attached :image
  has_many_attached :images
  validates :text, presence: true
  validates :images, presence: true
end
