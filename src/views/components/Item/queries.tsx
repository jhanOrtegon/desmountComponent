import { gql } from '@apollo/client'

export const ALL_CHARACTERS = gql`
   query characters{
        characters{
            info {
            count
            }
            results {
             name
            }
        }
   }
`