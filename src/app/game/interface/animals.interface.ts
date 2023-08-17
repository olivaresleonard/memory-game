export interface AnimalsInterface {
  entries: EntryAnimals[]
  meta: Meta2
}

export interface EntryAnimals {
  meta: Meta
  fields: Fields
}

export interface Meta {
  name: string
  slug: string
  tags: any[]
  type: string
  uuid: string
  space: string
  author: Author
  locale: string
  excerpt: string
  private: boolean
  targets: any[]
  category: any
  created_at: string
  updated_at: string
  published_at: string
  unpublish_at: any
  version_type: string
  category_name: any
  category_slug: any
  available_locales: string[]
}

export interface Author {}

export interface Fields {
  image: Image
}

export interface Image {
  url: string
  tags: any[]
  uuid: string
  title: string
  alt_text: any
  description: any
  content_type: string
}

export interface Meta2 {
  total_entries: number
  per_page: number
  current_page: number
  total_pages: number
}
