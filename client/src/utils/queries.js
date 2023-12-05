import { gql } from '@apollo/client';

export const QUERY_TECH = gql`
  query tech {
    technologies {
      _id
      name
    }
  }
`;

export const QUERY_SINGLE_MATCHUP = gql`
  query matchups($_id: String) {
    matchups(_id: $_id) {
      _id
      tech1
      tech2
      tech1_votes
      tech2_votes
    }
  }
`;

export const QUERY_MATCHUPS = gql`
  query matchup {
    matchups {
      _id
      tech1
      tech2
      tech1_votes
      tech2_votes
    }
  }
`