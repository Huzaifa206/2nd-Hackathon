import { type SchemaTypeDefinition } from 'sanity'
import { productSchema } from '../schemas/product'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema],
}
