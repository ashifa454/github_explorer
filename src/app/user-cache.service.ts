import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserCacheService {
  dbRef = null;
  constructor() {
  }
  initializeDb() {
    return new Promise((resolve, reject) => {
      const request = window.indexedDB.open('githubExplorer', 1);
      const currentRef = this;
      request.onsuccess = function (event: any) {
        currentRef.dbRef = event.target.result;
        resolve(currentRef);
      }
      request.onerror = function (event) {
        currentRef.dbRef = null;
        reject(event)
        console.log('[onerror]', request.error);
      };
      request.onupgradeneeded = function (event: any) {
        const db = event.target.result;
        const store = db.createObjectStore('users', { keyPath: 'node_id' });
      };
    })
  }
  insertUsers(users) {
    return new Promise((resolve, reject) => {
      const transaction = this.dbRef.transaction('users', 'readwrite')
      transaction.onsuccess = function (event: any) {
        reject(event);
      }
      transaction.onerror = function (event: any) {
        reject(event)
      }
      const userStore = transaction.objectStore('users');
      users.forEach(function (user) {
        userStore.add(user)
      })
      resolve("added")
    })
  }
  async getUsers() {
    return new Promise((resolve, reject) => {
      const transaction = this.dbRef.transaction('users', 'readwrite');
      if (transaction) {
        const userStore = transaction.objectStore('users');
        userStore.getAll().onsuccess = function (event) {
          resolve(event.target.result);
        };
        transaction.onerror = function (event: any) {
          reject(event)
        }
      } else {
        reject(event)
      }
    })
  }
}
