let rooms = [
  {
    id: 0,
    name: "Normal Family Room",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    rate: 100,
    capacity: 2,
    isAvilable: true,
    wifi: false,
    food: false,
  },
  {
    id: 1,
    name: "Royal Family Room",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    rate: 350,
    capacity: 4,
    isAvilable: true,
    wifi: true,
    food: false,
  },
  {
    id: 2,
    name: "Royal VIP Family Room",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    rate: 550,
    capacity: 4,
    isAvilable: true,
    wifi: true,
    food: true,
  },
];

const resolver = {
  Query: {
    allRooms: async () => {
      return rooms;
    },
  },
  Mutation: {
    addRoom: async (_,{args}) => {
      console.log(args)
      const {
        name,
        royal,
        description,
        rate,
        capactiy,
        isAvilable,
        wifi,
        food,
      } = args;
      return {
        id: 2,
        name:"ge",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        rate: 550,
        capacity: 4,
        isAvilable: true,
        wifi: true,
        food: true,
      };
    },
  },
};

module.exports = resolver;
