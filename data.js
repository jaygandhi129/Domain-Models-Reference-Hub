// Domain Models Configuration
// Add new models to this array to automatically generate pages

const DOMAIN_MODELS = [
    {
        id: "bian",
        name: "BIAN",
        fullName: "Banking Industry Architecture Network",
        description: "A comprehensive service-oriented architecture framework for the banking industry, defining business capabilities and service domains.",
        category: "Financial Services",
        tags: ["Banking", "SOA", "Financial Services", "Architecture"],
        overview: "BIAN defines a service-oriented architecture for banking, organizing business functionality into discrete service domains. It provides a blueprint for banks to structure their IT systems and business processes in a standardized way.",
        entities: [
            {
                name: "Customer Management",
                description: "Manages customer profiles, relationships, and lifecycle",
                attributes: ["Customer ID", "Profile Data", "Relationship Status", "Lifecycle Stage"]
            },
            {
                name: "Product Management", 
                description: "Handles product definitions, catalogs, and configurations",
                attributes: ["Product ID", "Product Catalog", "Configuration Rules", "Pricing"]
            },
            {
                name: "Party Authentication",
                description: "Provides identity verification and authentication services",
                attributes: ["Authentication Methods", "Identity Tokens", "Security Policies"]
            },
            {
                name: "Transaction Engine",
                description: "Processes financial transactions and maintains ledgers",
                attributes: ["Transaction ID", "Account References", "Amount", "Status"]
            }
        ],
        concepts: [
            {
                term: "Service Domain",
                definition: "A discrete area of business functionality with clear boundaries and responsibilities"
            },
            {
                term: "Control Record",
                definition: "The main business object managed by a service domain"
            },
            {
                term: "Behavior Qualifier",
                definition: "Specific aspects or variations of service domain behavior"
            },
            {
                term: "Business Service",
                definition: "Exposed capabilities of a service domain that can be consumed by other domains"
            }
        ],
        links: [
            {
                title: "Official BIAN Website",
                url: "https://bian.org/"
            },
            {
                title: "BIAN Service Landscape",
                url: "https://bian.org/service-landscape/"
            },
            {
                title: "BIAN API Standards",
                url: "https://bian.org/deliverables/api-standards/"
            }
        ]
    },
    {
        id: "arts",
        name: "ARTS",
        fullName: "Association for Retail Technology Standards",
        description: "Industry standard for retail data models, focusing on point-of-sale systems and retail operations.",
        category: "Retail",
        tags: ["Retail", "POS", "Data Model", "Operations"],
        overview: "ARTS provides standardized data models for retail operations, focusing on operational data store (ODS) and data warehouse requirements. It defines common structures for retail transactions, inventory, and customer data.",
        entities: [
            {
                name: "Transaction",
                description: "Central transaction record with header and line items",
                attributes: ["Transaction ID", "Timestamp", "Workstation ID", "Operator ID", "Customer ID"]
            },
            {
                name: "Item",
                description: "Product information including SKU, descriptions, and pricing",
                attributes: ["Item ID", "SKU", "Description", "Price", "Category"]
            },
            {
                name: "Customer",
                description: "Customer demographics and loyalty information",
                attributes: ["Customer ID", "Name", "Address", "Phone", "Loyalty Status"]
            },
            {
                name: "Location",
                description: "Store, warehouse, and organizational hierarchy",
                attributes: ["Location ID", "Store Number", "Address", "Manager", "Region"]
            }
        ],
        concepts: [
            {
                term: "Retail Transaction",
                definition: "A complete business transaction including all sales, returns, and payments"
            },
            {
                term: "Line Item",
                definition: "Individual product or service sold within a transaction"
            },
            {
                term: "Operational Data Store (ODS)",
                definition: "Database designed to support day-to-day retail operations"
            },
            {
                term: "Point of Sale (POS)",
                definition: "System where retail transactions are completed"
            }
        ],
        structure: `RetailTransaction
├── TransactionHeader
│   ├── WorkstationID
│   ├── SequenceNumber
│   └── BusinessDate
└── LineItem[]
    ├── Sale
    ├── Return
    ├── Discount
    └── Tax`,
        links: [
            {
                title: "NRF ARTS Homepage",
                url: "https://nrf.com/resources/retail-library/arts"
            },
            {
                title: "ARTS Data Model Documentation",
                url: "https://nrf.com/resources/retail-library/arts-operational-data-store"
            }
        ]
    },
    {
        id: "fhir",
        name: "HL7 FHIR",
        fullName: "Fast Healthcare Interoperability Resources",
        description: "A standard for health information exchange, built on modern web technologies.",
        category: "Healthcare",
        tags: ["Healthcare", "Interoperability", "API", "Standards"],
        overview: "FHIR is a standard for health information exchange that leverages modern web technologies. It defines a set of resources that represent granular clinical concepts and a RESTful API for exchanging these resources.",
        entities: [
            {
                name: "Patient",
                description: "Demographics and other administrative information about an individual",
                attributes: ["Identifier", "Name", "Gender", "Birth Date", "Address", "Contact"]
            },
            {
                name: "Practitioner",
                description: "Healthcare professionals and other individuals involved in care",
                attributes: ["Identifier", "Name", "Qualification", "Communication", "Address"]
            },
            {
                name: "Observation",
                description: "Measurements and simple assertions about a patient",
                attributes: ["Status", "Code", "Subject", "Value", "Reference Range"]
            },
            {
                name: "Condition",
                description: "Detailed information about conditions, problems or diagnoses",
                attributes: ["Clinical Status", "Code", "Subject", "Onset", "Severity"]
            }
        ],
        concepts: [
            {
                term: "Resource",
                definition: "Basic building blocks of FHIR representing healthcare concepts"
            },
            {
                term: "Bundle",
                definition: "Collection of resources used for data exchange"
            },
            {
                term: "Profile",
                definition: "Constraints and extensions applied to base resources"
            },
            {
                term: "RESTful API",
                definition: "Web-based API for creating, reading, updating, and deleting resources"
            }
        ],
        links: [
            {
                title: "FHIR Official Site",
                url: "https://hl7.org/fhir/"
            },
            {
                title: "FHIR R4 Documentation",
                url: "https://hl7.org/fhir/R4/"
            },
            {
                title: "FHIR Implementation Guides",
                url: "https://fhir.org/guides/"
            }
        ]
    },
    {
        id: "swift",
        name: "SWIFT",
        fullName: "Society for Worldwide Interbank Financial Telecommunication",
        description: "Global messaging network and standards for secure financial messages between institutions.",
        category: "Financial Services",
        tags: ["Banking", "Messaging", "Standards", "International"],
        overview: "SWIFT provides a network and standards that enable financial institutions worldwide to send and receive information about financial transactions in a secure, standardized environment.",
        entities: [
            {
                name: "Message Types",
                description: "Standardized format for different types of financial messages",
                attributes: ["MT103 - Single Credit Transfer", "MT202 - Bank Transfer", "MT940 - Account Statement"]
            },
            {
                name: "BIC Codes",
                description: "Bank Identifier Codes for routing messages",
                attributes: ["Institution Code", "Country Code", "Location Code", "Branch Code"]
            },
            {
                name: "Payment Instructions",
                description: "Structured payment information and instructions",
                attributes: ["Amount", "Currency", "Beneficiary", "Purpose Code"]
            }
        ],
        concepts: [
            {
                term: "MT (Message Type)",
                definition: "Standardized message formats for different types of financial transactions"
            },
            {
                term: "BIC (Bank Identifier Code)",
                definition: "Unique identifier for financial institutions in SWIFT network"
            },
            {
                term: "STP (Straight Through Processing)",
                definition: "Automated processing without manual intervention"
            }
        ],
        links: [
            {
                title: "SWIFT Official Site",
                url: "https://www.swift.com/"
            },
            {
                title: "SWIFT Standards",
                url: "https://www.swift.com/standards"
            }
        ]
    }
];

// Navigation structure - automatically generated from DOMAIN_MODELS
const NAVIGATION_SECTIONS = [
    {
        title: "Quick Start",
        links: [
            { id: "home", title: "Overview", isActive: true },
            { id: "getting-started", title: "Getting Started" }
        ]
    }
];

// Site configuration
const SITE_CONFIG = {
    title: "Domain Models Reference",
    subtitle: "Comprehensive guide to industry standard domain models and frameworks",
    github: {
        repository: "https://github.com/your-username/domain-models-wiki",
        editPage: "https://github.com/your-username/domain-models-wiki/edit/main/"
    }
};