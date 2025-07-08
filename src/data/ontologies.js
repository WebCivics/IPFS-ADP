export const initialOntologiesDb = {
    adp: {
        name: 'Agent Discovery Protocol',
        prefix: 'adp',
        uri: 'https://webcivics.github.io/adp/ontdev/adp#',
        terms: ['Agent', 'agentType', 'hasWebID', 'hasLinkedinAccount', 'hasTwitterAccount', 'hasEcashAccount', 'hasPodStorage', 'serviceEndpoint', 'sparqlEndpoint', 'trusts', 'AIAgent', 'ContentProvider', 'FinancialInstitution', 'EssentialService'],
    },
    schema: {
        name: 'Schema.org',
        prefix: 'schema',
        uri: 'https://schema.org/',
        terms: ['Person', 'Organization', 'SoftwareApplication', 'WebSite', 'name', 'description', 'url', 'domain', 'provider', 'isAdultOriented'],
    },
    foaf: {
        name: 'Friend of a Friend',
        prefix: 'foaf',
        uri: 'http://xmlns.com/foaf/0.1/',
        terms: ['Person', 'Organization', 'Agent', 'name', 'givenName', 'familyName', 'mbox', 'homepage', 'maker', 'account'],
    },
    dcterms: {
        name: 'Dublin Core Terms',
        prefix: 'dcterms',
        uri: 'http://purl.org/dc/terms/',
        terms: ['title', 'description', 'creator', 'publisher', 'rights'],
    },
    vc: {
        name: 'Verifiable Credentials',
        prefix: 'vc',
        uri: 'https://www.w3.org/2018/credentials#',
        terms: ['VerifiableCredential', 'issuer', 'credentialSubject'],
    }
};