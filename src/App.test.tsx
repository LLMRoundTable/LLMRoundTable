import { describe, it, expect } from 'vitest';
import { build } from 'vite';

describe('Vite Build', () => {
  it('should build the project without errors', async () => {
    let error = null;
    try {
      await build();
    } catch (e) {
      error = e;
    }
    expect(error).toBeNull();
  });
});