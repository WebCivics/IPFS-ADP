export const agentTypeTemplates = {
    'naturalPerson': {
        types: ['adp:Agent', 'schema:Person'],
        properties: [
            { id: 1, prefix: 'foaf', property: 'name', value: 'Alex Doe', type: 'literal' },
            { id: 2, prefix: 'schema', property: 'description', value: 'A personal agent profile for Alex Doe.', type: 'literal' },
            { id: 3, prefix: 'adp', property: 'hasTwitterAccount', value: 'alexdoe', type: 'literal' },
            { id: 4, prefix: 'adp', property: 'hasEcashAccount', value: 'ecash:q...', type: 'literal' },
        ]
    },
    'organization': {
        types: ['adp:Agent', 'schema:Organization'],
        properties: [
            { id: 1, prefix: 'foaf', property: 'name', value: 'Example Corp', type: 'literal' },
            { id: 2, prefix: 'schema', property: 'description', value: 'An example organization providing services.', type: 'literal' },
            { id: 3, prefix: 'schema', property: 'url', value: 'https://example.com', type: 'uri' },
        ]
    },
    'aiAgent': {
        types: ['adp:Agent', 'adp:AIAgent', 'schema:SoftwareApplication'],
        properties: [
            { id: 1, prefix: 'foaf', property: 'name', value: 'AI Assistant', type: 'literal' },
            { id: 2, prefix: 'schema', property: 'description', value: 'An AI-powered service.', type: 'literal' },
            { id: 3, prefix: 'schema', property: 'provider', value: 'Example Corp', type: 'literal' },
            { id: 4, prefix: 'adp', property: 'serviceEndpoint', value: 'https://api.example.com/v1', type: 'uri' },
        ]
    },
    'humanitarian': {
         types: ['adp:Agent', 'adp:EssentialService'],
         properties: [
            { id: 1, prefix: 'foaf', property: 'name', value: 'Global Aid Org', type: 'literal' },
            { id: 2, prefix: 'schema', property: 'description', value: 'A humanitarian organization providing emergency relief.', type: 'literal' },
         ]
    },
     'adultWebsite': {
         types: ['adp:Agent', 'adp:ContentProvider'],
         properties: [
            { id: 1, prefix: 'foaf', property: 'name', value: 'Adult Content Site', type: 'literal' },
            { id: 2, prefix: 'schema', property: 'isAdultOriented', value: 'true', type: 'literal' },
         ]
    }
};