import { type User, type InsertUser, type ContactSubmission } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  saveContactSubmission(submission: ContactSubmission): Promise<void>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contactSubmissions: ContactSubmission[];

  constructor() {
    this.users = new Map();
    this.contactSubmissions = [];
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async saveContactSubmission(submission: ContactSubmission): Promise<void> {
    this.contactSubmissions.push(submission);
    console.log("Contact submission received:", submission);
  }
}

export const storage = new MemStorage();
