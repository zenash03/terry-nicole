import { type SchemaTypeDefinition } from 'sanity'
import photo from './photo'
import photographer from './photographer'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [photographer, photo],
}
