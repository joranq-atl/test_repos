// Service layer for TypeScript test

import { User, UserManager, createUser, calculateDiscount } from './types';

export class AppService {
    private userManager: UserManager;

    constructor() {
        this.userManager = new UserManager();
    }

    registerUser(name: string, email: string): User {
        const user = createUser(name, email);
        this.userManager.addUser(user);
        return user;
    }

    getUserById(id: number): User | undefined {
        return this.userManager.getUser(id);
    }

    applyDiscount(price: number): number {
        return calculateDiscount(price, 10);
    }

    processOrder(userId: number, price: number): void {
        const user = this.getUserById(userId);
        if (user) {
            const discountedPrice = this.applyDiscount(price);
            console.log(`Order for ${user.name}: $${discountedPrice}`);
        }
    }
}

export function initializeService(): AppService {
    return new AppService();
}
