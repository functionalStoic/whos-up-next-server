import { createConnection, getConnection } from 'typeorm';
import { User } from '../entity/User';
import { Category } from '../entity/Category';
import { Event } from '../entity/Event';
import { Person } from '../entity/Person';

// Resolvers define the technique for fetching the types in the schema.
createConnection();

export default {
  Query: {
    users: (_obj, _args, _context) => {
      return getConnection().manager.find(User);
    },
    categories: (_obj, _args, _context) => {
      return getConnection().manager.find(Category);
    },
    events: (_obj, _args, _context) => {
      return getConnection().manager.find(Event);
    },
    people: (_obj, _args, _context) => {
      return getConnection().manager.find(Person);
    }
  },
  Mutation: {
    createUser: async (_obj, args, _context) => {
      try {
        const user = await User.create(args);
        return { user, errors: [] };
      } catch (err) {
        return { user: null, error: err.message };
      }
    },
    createCategory: async (_obj, args, _context) => {
      try {
        const category = await Category.create(args);
        return { category, errors: [] };
      } catch (err) {
        return { category: null, error: err.message };
      }
    },
    createEvent: async (_obj, args, _context) => {
      try {
        const event = await Event.create(args);
        return { event, errors: [] };
      } catch (err) {
        return { event: null, error: err.message };
      }
    },
    createPerson: async (_obj, args, _context) => {
      try {
        const person = await Person.create(args);
        return { person, errors: [] };
      } catch (err) {
        return { person: null, error: err.message };
      }
    }
  }
};
