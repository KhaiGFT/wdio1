export function expectToMatchSchema(response: any, schema: any) {
  function validate(obj: any, schemaObj: any, path = "") {
    for (const key of Object.keys(schemaObj)) {
      const expectedType = schemaObj[key];
      const actualValue = obj[key];
      const currentPath = path ? `${path}.${key}` : key;

      // Key must exist
      expect(actualValue).not.toBeUndefined();

      if (typeof expectedType === "object" && expectedType !== null) {
        // Nested object → recurse
        validate(actualValue, expectedType, currentPath);
      } else {
        // Validate type
        if (expectedType === "array") {
          expect(Array.isArray(actualValue)).toBe(true);
        } else {
          expect(typeof actualValue).toBe(expectedType);
        }
      }
    }
  }

  validate(response, schema);
}