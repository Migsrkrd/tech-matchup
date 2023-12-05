const { Tech, Matchup } = require('../models');

const resolvers = {
    Query: {
        technologies: async() => {
            return Tech.find({});
        },
        matchups: async() => {
            return Matchup.find({});
        },
        matchup: async(parent, { matchupId }) => {
            return Matchup.findOne({ _id: matchupId });
        }
    },

    Mutation: {
        createMatchup: async(parent, { tech1Id, tech2Id }) => {
            const matchup = await Matchup.create({ tech1Id, tech2Id });
            return matchup;
        },
        createVote: async(parent, { matchupId, techNum}) => {
            const matchup = await Matchup.findOneAndUpdate(
                { _id: matchupId },
                { $inc: { [`tech${techNum}_votes`]: 1 } },
                { new: true }
              );
            return matchup;
        }
    }
}