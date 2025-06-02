export class MockDataService {
  createDb() {
    const settings = [
      { id: 1, key: 'language', value: 'Arabic' },
      { id: 2, key: 'theme', value: 'Dark' }
    ];

    return { settings }; // API/settings
  }
}

