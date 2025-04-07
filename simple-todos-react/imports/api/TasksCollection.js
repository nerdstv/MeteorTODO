import { Mongo } from 'meteor/mongo';

export const TasksCollection = new Mongo.Collection('tasks');
// This is the only file that should import the Mongo package directly.