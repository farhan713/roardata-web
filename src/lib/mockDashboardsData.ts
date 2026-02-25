export const mockDashboardsData: Record<string, any> = {
  "AerospaceAndDefence": {
    "title": "Aerospace & Defence Operations",
    "subtitle": "Supply chain, compliance, R&D, security, assets and workforce - with interactive filters and drill-down.",
    "kpis": [
      {
        "title": "OTIF",
        "value": "89.0%",
        "change": "↗ 1.4%",
        "subtext": "vs mo",
        "icon": "Truck",
        "color": "emerald"
      },
      {
        "title": "LEAD TIME",
        "value": "56d",
        "change": "↘ 2.1%",
        "subtext": "vs mo",
        "icon": "Box",
        "color": "amber"
      },
      {
        "title": "COMPLIANCE",
        "value": "90.0%",
        "change": "↗ 0.6%",
        "subtext": "vs audit",
        "icon": "ShieldCheck",
        "color": "emerald"
      },
      {
        "title": "UPTIME",
        "value": "93.7%",
        "change": "↗ 0.8%",
        "subtext": "vs mo",
        "icon": "Wrench",
        "color": "emerald"
      }
    ],
    "tabs": [
      {
        "name": "Overview",
        "charts": [
          {
            "type": "LineChart",
            "title": "Supply chain trends",
            "subtext": "OTIF, lead time and inventory health",
            "badge": "Live view",
            "dataKey": [
              "otif",
              "leadTime",
              "inventory"
            ],
            "colors": [
              "#2dd4bf",
              "#fbbf24",
              "#818cf8"
            ],
            "data": [
              {
                "name": "M0",
                "otif": 72,
                "leadTime": 56,
                "inventory": 51
              },
              {
                "name": "M1",
                "otif": 77,
                "leadTime": 52,
                "inventory": 72
              },
              {
                "name": "M2",
                "otif": 88,
                "leadTime": 55,
                "inventory": 75
              },
              {
                "name": "M3",
                "otif": 71,
                "leadTime": 58,
                "inventory": 53
              },
              {
                "name": "M4",
                "otif": 81,
                "leadTime": 54,
                "inventory": 57
              },
              {
                "name": "M5",
                "otif": 81,
                "leadTime": 45,
                "inventory": 73
              },
              {
                "name": "M6",
                "otif": 75,
                "leadTime": 52,
                "inventory": 53
              },
              {
                "name": "M7",
                "otif": 84,
                "leadTime": 49,
                "inventory": 54
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Top supplier risks",
            "subtext": "Click a bar to focus",
            "badge": "10 suppliers",
            "dataKey": [
              "risk"
            ],
            "colors": [
              "url(#colorAmber)"
            ],
            "data": [
              {
                "name": "S8",
                "risk": 78
              },
              {
                "name": "S0",
                "risk": 77
              },
              {
                "name": "S7",
                "risk": 76
              },
              {
                "name": "S9",
                "risk": 69
              },
              {
                "name": "S5",
                "risk": 63
              },
              {
                "name": "S6",
                "risk": 62
              },
              {
                "name": "S4",
                "risk": 46
              },
              {
                "name": "S3",
                "risk": 30
              },
              {
                "name": "S2",
                "risk": 29
              },
              {
                "name": "S1",
                "risk": 22
              }
            ]
          }
        ]
      },
      {
        "name": "Supply chain",
        "charts": []
      },
      {
        "name": "Compliance",
        "charts": []
      },
      {
        "name": "R&D",
        "charts": []
      },
      {
        "name": "Security",
        "charts": []
      },
      {
        "name": "Assets",
        "charts": []
      },
      {
        "name": "Workforce",
        "charts": []
      }
    ]
  },
  "Agriculture": {
    "title": "Precision Agriculture Operations",
    "subtitle": "Real-time crop monitoring, resource management, and machinery telemetry.",
    "kpis": [
      {
        "title": "AVG YIELD",
        "value": "89%",
        "change": "↗ 2.5%",
        "subtext": "vs season",
        "icon": "Leaf",
        "color": "emerald"
      },
      {
        "title": "WATER USED",
        "value": "4.3ML",
        "change": "↘ 1.2%",
        "subtext": "vs mo",
        "icon": "Droplet",
        "color": "rose"
      },
      {
        "title": "ACTIVE FLEET",
        "value": "1",
        "change": "↗ 0.0%",
        "subtext": "vs shift",
        "icon": "Tractor",
        "color": "emerald"
      },
      {
        "title": "HEALTHY FIELDS",
        "value": "1/8",
        "change": "↗ 1.0%",
        "subtext": "vs week",
        "icon": "Leaf",
        "color": "emerald"
      }
    ],
    "tabs": [
      {
        "name": "Overview",
        "charts": [
          {
            "type": "LineChart",
            "title": "Yield vs Water Usage",
            "subtext": "Correlating crop yield with irrigation efficiency",
            "badge": "Live Sensor Data",
            "dataKey": [
              "yield",
              "water"
            ],
            "colors": [
              "#2dd4bf",
              "#818cf8"
            ],
            "data": [
              {
                "name": "W1",
                "yield": 60,
                "water": 80
              },
              {
                "name": "W2",
                "yield": 75,
                "water": 70
              },
              {
                "name": "W3",
                "yield": 82,
                "water": 65
              },
              {
                "name": "W4",
                "yield": 89,
                "water": 75
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Field Health Status",
            "subtext": "Soil moisture and overall crop health",
            "badge": "8 Fields",
            "dataKey": [
              "health"
            ],
            "colors": [
              "url(#colorAmber)"
            ],
            "data": [
              {
                "name": "Field 1",
                "health": 90
              },
              {
                "name": "Field 2",
                "health": 85
              },
              {
                "name": "Field 3",
                "health": 40
              },
              {
                "name": "Field 4",
                "health": 95
              }
            ]
          }
        ]
      },
      {
        "name": "Fields & Crops",
        "charts": []
      },
      {
        "name": "Machinery",
        "charts": []
      },
      {
        "name": "Resources",
        "charts": []
      },
      {
        "name": "Workforce",
        "charts": []
      }
    ]
  },
  "Automotive": {
    "title": "Automotive Operations",
    "subtitle": "Interactive analytics and key metrics overview.",
    "kpis": [
      {
        "title": "OTIF / YIELD",
        "value": "87%",
        "change": "+1.1%",
        "subtext": "vs last mo",
        "icon": "Activity",
        "color": "emerald"
      },
      {
        "title": "LEAD TIME",
        "value": "59d",
        "change": "-0.7%",
        "subtext": "vs last mo",
        "icon": "Box",
        "color": "amber"
      },
      {
        "title": "COMPLIANCE",
        "value": "95%",
        "change": "+0.2%",
        "subtext": "vs audit",
        "icon": "ShieldCheck",
        "color": "emerald"
      },
      {
        "title": "UPTIME",
        "value": "95%",
        "change": "+0.9%",
        "subtext": "vs last mo",
        "icon": "Database",
        "color": "emerald"
      }
    ],
    "tabs": [
      {
        "name": "Overview",
        "charts": [
          {
            "type": "LineChart",
            "title": "Performance Trends",
            "subtext": "Core metrics over the last 6 months",
            "badge": "Live view",
            "dataKey": [
              "metricA",
              "metricB"
            ],
            "colors": [
              "#2dd4bf",
              "#fbbf24"
            ],
            "data": [
              {
                "name": "M1",
                "metricA": 72,
                "metricB": 57
              },
              {
                "name": "M2",
                "metricA": 53,
                "metricB": 71
              },
              {
                "name": "M3",
                "metricA": 68,
                "metricB": 75
              },
              {
                "name": "M4",
                "metricA": 71,
                "metricB": 30
              },
              {
                "name": "M5",
                "metricA": 74,
                "metricB": 54
              },
              {
                "name": "M6",
                "metricA": 93,
                "metricB": 48
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Top Risks/Anomalies",
            "subtext": "Click a bar to focus (Top 10)",
            "badge": "10 items",
            "dataKey": [
              "metricA"
            ],
            "colors": [
              "url(#colorAmber)"
            ],
            "data": [
              {
                "name": "R6",
                "metricA": 84
              },
              {
                "name": "R3",
                "metricA": 82
              },
              {
                "name": "R5",
                "metricA": 69
              },
              {
                "name": "R1",
                "metricA": 68
              },
              {
                "name": "R7",
                "metricA": 54
              },
              {
                "name": "R10",
                "metricA": 53
              },
              {
                "name": "R8",
                "metricA": 39
              },
              {
                "name": "R9",
                "metricA": 27
              },
              {
                "name": "R4",
                "metricA": 17
              },
              {
                "name": "R2",
                "metricA": 3
              }
            ]
          }
        ]
      },
      {
        "name": "Supply chain",
        "charts": []
      },
      {
        "name": "Compliance",
        "charts": []
      }
    ]
  },
  "Banking": {
    "title": "Banking Operations",
    "subtitle": "Interactive analytics and key metrics overview.",
    "kpis": [
      {
        "title": "OTIF / YIELD",
        "value": "96%",
        "change": "+2.1%",
        "subtext": "vs last mo",
        "icon": "Activity",
        "color": "emerald"
      },
      {
        "title": "LEAD TIME",
        "value": "39d",
        "change": "-2.1%",
        "subtext": "vs last mo",
        "icon": "Box",
        "color": "amber"
      },
      {
        "title": "COMPLIANCE",
        "value": "86%",
        "change": "+1.1%",
        "subtext": "vs audit",
        "icon": "ShieldCheck",
        "color": "emerald"
      },
      {
        "title": "UPTIME",
        "value": "97%",
        "change": "+0.7%",
        "subtext": "vs last mo",
        "icon": "Database",
        "color": "emerald"
      }
    ],
    "tabs": [
      {
        "name": "Overview",
        "charts": [
          {
            "type": "LineChart",
            "title": "Performance Trends",
            "subtext": "Core metrics over the last 6 months",
            "badge": "Live view",
            "dataKey": [
              "metricA",
              "metricB"
            ],
            "colors": [
              "#2dd4bf",
              "#fbbf24"
            ],
            "data": [
              {
                "name": "M1",
                "metricA": 50,
                "metricB": 36
              },
              {
                "name": "M2",
                "metricA": 54,
                "metricB": 38
              },
              {
                "name": "M3",
                "metricA": 58,
                "metricB": 63
              },
              {
                "name": "M4",
                "metricA": 82,
                "metricB": 67
              },
              {
                "name": "M5",
                "metricA": 62,
                "metricB": 37
              },
              {
                "name": "M6",
                "metricA": 67,
                "metricB": 60
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Top Risks/Anomalies",
            "subtext": "Click a bar to focus (Top 10)",
            "badge": "10 items",
            "dataKey": [
              "metricA"
            ],
            "colors": [
              "url(#colorAmber)"
            ],
            "data": [
              {
                "name": "R4",
                "metricA": 97
              },
              {
                "name": "R3",
                "metricA": 93
              },
              {
                "name": "R7",
                "metricA": 93
              },
              {
                "name": "R6",
                "metricA": 66
              },
              {
                "name": "R5",
                "metricA": 65
              },
              {
                "name": "R10",
                "metricA": 64
              },
              {
                "name": "R2",
                "metricA": 53
              },
              {
                "name": "R1",
                "metricA": 43
              },
              {
                "name": "R8",
                "metricA": 43
              },
              {
                "name": "R9",
                "metricA": 2
              }
            ]
          }
        ]
      },
      {
        "name": "Supply chain",
        "charts": []
      },
      {
        "name": "Compliance",
        "charts": []
      }
    ]
  },
  "Construction": {
    "title": "Construction Operations",
    "subtitle": "Interactive analytics and key metrics overview.",
    "kpis": [
      {
        "title": "OTIF / YIELD",
        "value": "81%",
        "change": "+1.9%",
        "subtext": "vs last mo",
        "icon": "Activity",
        "color": "emerald"
      },
      {
        "title": "LEAD TIME",
        "value": "25d",
        "change": "-2.4%",
        "subtext": "vs last mo",
        "icon": "Box",
        "color": "amber"
      },
      {
        "title": "COMPLIANCE",
        "value": "89%",
        "change": "+1.3%",
        "subtext": "vs audit",
        "icon": "ShieldCheck",
        "color": "emerald"
      },
      {
        "title": "UPTIME",
        "value": "98%",
        "change": "+0.5%",
        "subtext": "vs last mo",
        "icon": "Database",
        "color": "emerald"
      }
    ],
    "tabs": [
      {
        "name": "Overview",
        "charts": [
          {
            "type": "LineChart",
            "title": "Performance Trends",
            "subtext": "Core metrics over the last 6 months",
            "badge": "Live view",
            "dataKey": [
              "metricA",
              "metricB"
            ],
            "colors": [
              "#2dd4bf",
              "#fbbf24"
            ],
            "data": [
              {
                "name": "M1",
                "metricA": 88,
                "metricB": 44
              },
              {
                "name": "M2",
                "metricA": 53,
                "metricB": 77
              },
              {
                "name": "M3",
                "metricA": 58,
                "metricB": 46
              },
              {
                "name": "M4",
                "metricA": 86,
                "metricB": 36
              },
              {
                "name": "M5",
                "metricA": 61,
                "metricB": 68
              },
              {
                "name": "M6",
                "metricA": 92,
                "metricB": 54
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Top Risks/Anomalies",
            "subtext": "Click a bar to focus (Top 10)",
            "badge": "10 items",
            "dataKey": [
              "metricA"
            ],
            "colors": [
              "url(#colorAmber)"
            ],
            "data": [
              {
                "name": "R10",
                "metricA": 76
              },
              {
                "name": "R5",
                "metricA": 71
              },
              {
                "name": "R7",
                "metricA": 70
              },
              {
                "name": "R3",
                "metricA": 45
              },
              {
                "name": "R6",
                "metricA": 38
              },
              {
                "name": "R4",
                "metricA": 34
              },
              {
                "name": "R9",
                "metricA": 27
              },
              {
                "name": "R2",
                "metricA": 24
              },
              {
                "name": "R8",
                "metricA": 23
              },
              {
                "name": "R1",
                "metricA": 22
              }
            ]
          }
        ]
      },
      {
        "name": "Supply chain",
        "charts": []
      },
      {
        "name": "Compliance",
        "charts": []
      }
    ]
  },
  "Education": {
    "title": "Education Operations",
    "subtitle": "Interactive analytics and key metrics overview.",
    "kpis": [
      {
        "title": "OTIF / YIELD",
        "value": "93%",
        "change": "+1.7%",
        "subtext": "vs last mo",
        "icon": "Activity",
        "color": "emerald"
      },
      {
        "title": "LEAD TIME",
        "value": "27d",
        "change": "-2.4%",
        "subtext": "vs last mo",
        "icon": "Box",
        "color": "amber"
      },
      {
        "title": "COMPLIANCE",
        "value": "91%",
        "change": "+0.6%",
        "subtext": "vs audit",
        "icon": "ShieldCheck",
        "color": "emerald"
      },
      {
        "title": "UPTIME",
        "value": "91%",
        "change": "+1.0%",
        "subtext": "vs last mo",
        "icon": "Database",
        "color": "emerald"
      }
    ],
    "tabs": [
      {
        "name": "Overview",
        "charts": [
          {
            "type": "LineChart",
            "title": "Performance Trends",
            "subtext": "Core metrics over the last 6 months",
            "badge": "Live view",
            "dataKey": [
              "metricA",
              "metricB"
            ],
            "colors": [
              "#2dd4bf",
              "#fbbf24"
            ],
            "data": [
              {
                "name": "M1",
                "metricA": 66,
                "metricB": 75
              },
              {
                "name": "M2",
                "metricA": 86,
                "metricB": 33
              },
              {
                "name": "M3",
                "metricA": 69,
                "metricB": 72
              },
              {
                "name": "M4",
                "metricA": 96,
                "metricB": 72
              },
              {
                "name": "M5",
                "metricA": 69,
                "metricB": 78
              },
              {
                "name": "M6",
                "metricA": 58,
                "metricB": 43
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Top Risks/Anomalies",
            "subtext": "Click a bar to focus (Top 10)",
            "badge": "10 items",
            "dataKey": [
              "metricA"
            ],
            "colors": [
              "url(#colorAmber)"
            ],
            "data": [
              {
                "name": "R10",
                "metricA": 97
              },
              {
                "name": "R6",
                "metricA": 89
              },
              {
                "name": "R3",
                "metricA": 86
              },
              {
                "name": "R9",
                "metricA": 75
              },
              {
                "name": "R5",
                "metricA": 74
              },
              {
                "name": "R1",
                "metricA": 73
              },
              {
                "name": "R7",
                "metricA": 50
              },
              {
                "name": "R8",
                "metricA": 37
              },
              {
                "name": "R4",
                "metricA": 13
              },
              {
                "name": "R2",
                "metricA": 12
              }
            ]
          }
        ]
      },
      {
        "name": "Supply chain",
        "charts": []
      },
      {
        "name": "Compliance",
        "charts": []
      }
    ]
  },
  "EnergyAndUtilities": {
    "title": "Energy And Utilities Operations",
    "subtitle": "Interactive analytics and key metrics overview.",
    "kpis": [
      {
        "title": "OTIF / YIELD",
        "value": "92%",
        "change": "+2.5%",
        "subtext": "vs last mo",
        "icon": "Activity",
        "color": "emerald"
      },
      {
        "title": "LEAD TIME",
        "value": "40d",
        "change": "-1.1%",
        "subtext": "vs last mo",
        "icon": "Box",
        "color": "amber"
      },
      {
        "title": "COMPLIANCE",
        "value": "88%",
        "change": "+1.5%",
        "subtext": "vs audit",
        "icon": "ShieldCheck",
        "color": "emerald"
      },
      {
        "title": "UPTIME",
        "value": "92%",
        "change": "+0.6%",
        "subtext": "vs last mo",
        "icon": "Database",
        "color": "emerald"
      }
    ],
    "tabs": [
      {
        "name": "Overview",
        "charts": [
          {
            "type": "LineChart",
            "title": "Performance Trends",
            "subtext": "Core metrics over the last 6 months",
            "badge": "Live view",
            "dataKey": [
              "metricA",
              "metricB"
            ],
            "colors": [
              "#2dd4bf",
              "#fbbf24"
            ],
            "data": [
              {
                "name": "M1",
                "metricA": 88,
                "metricB": 61
              },
              {
                "name": "M2",
                "metricA": 95,
                "metricB": 34
              },
              {
                "name": "M3",
                "metricA": 53,
                "metricB": 56
              },
              {
                "name": "M4",
                "metricA": 54,
                "metricB": 65
              },
              {
                "name": "M5",
                "metricA": 60,
                "metricB": 59
              },
              {
                "name": "M6",
                "metricA": 95,
                "metricB": 74
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Top Risks/Anomalies",
            "subtext": "Click a bar to focus (Top 10)",
            "badge": "10 items",
            "dataKey": [
              "metricA"
            ],
            "colors": [
              "url(#colorAmber)"
            ],
            "data": [
              {
                "name": "R4",
                "metricA": 92
              },
              {
                "name": "R5",
                "metricA": 76
              },
              {
                "name": "R1",
                "metricA": 66
              },
              {
                "name": "R9",
                "metricA": 57
              },
              {
                "name": "R8",
                "metricA": 38
              },
              {
                "name": "R3",
                "metricA": 30
              },
              {
                "name": "R7",
                "metricA": 29
              },
              {
                "name": "R10",
                "metricA": 18
              },
              {
                "name": "R2",
                "metricA": 7
              },
              {
                "name": "R6",
                "metricA": 7
              }
            ]
          }
        ]
      },
      {
        "name": "Supply chain",
        "charts": []
      },
      {
        "name": "Compliance",
        "charts": []
      }
    ]
  },
  "EnvironmentalServicesAndWasteManagement": {
    "title": "Environmental Services And Waste Management Operations",
    "subtitle": "Interactive analytics and key metrics overview.",
    "kpis": [
      {
        "title": "OTIF / YIELD",
        "value": "99%",
        "change": "+1.4%",
        "subtext": "vs last mo",
        "icon": "Activity",
        "color": "emerald"
      },
      {
        "title": "LEAD TIME",
        "value": "34d",
        "change": "-2.0%",
        "subtext": "vs last mo",
        "icon": "Box",
        "color": "amber"
      },
      {
        "title": "COMPLIANCE",
        "value": "94%",
        "change": "+1.7%",
        "subtext": "vs audit",
        "icon": "ShieldCheck",
        "color": "emerald"
      },
      {
        "title": "UPTIME",
        "value": "99%",
        "change": "+0.0%",
        "subtext": "vs last mo",
        "icon": "Database",
        "color": "emerald"
      }
    ],
    "tabs": [
      {
        "name": "Overview",
        "charts": [
          {
            "type": "LineChart",
            "title": "Performance Trends",
            "subtext": "Core metrics over the last 6 months",
            "badge": "Live view",
            "dataKey": [
              "metricA",
              "metricB"
            ],
            "colors": [
              "#2dd4bf",
              "#fbbf24"
            ],
            "data": [
              {
                "name": "M1",
                "metricA": 96,
                "metricB": 55
              },
              {
                "name": "M2",
                "metricA": 99,
                "metricB": 67
              },
              {
                "name": "M3",
                "metricA": 91,
                "metricB": 32
              },
              {
                "name": "M4",
                "metricA": 54,
                "metricB": 31
              },
              {
                "name": "M5",
                "metricA": 63,
                "metricB": 41
              },
              {
                "name": "M6",
                "metricA": 56,
                "metricB": 65
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Top Risks/Anomalies",
            "subtext": "Click a bar to focus (Top 10)",
            "badge": "10 items",
            "dataKey": [
              "metricA"
            ],
            "colors": [
              "url(#colorAmber)"
            ],
            "data": [
              {
                "name": "R4",
                "metricA": 90
              },
              {
                "name": "R8",
                "metricA": 88
              },
              {
                "name": "R7",
                "metricA": 82
              },
              {
                "name": "R2",
                "metricA": 78
              },
              {
                "name": "R6",
                "metricA": 74
              },
              {
                "name": "R1",
                "metricA": 66
              },
              {
                "name": "R3",
                "metricA": 64
              },
              {
                "name": "R10",
                "metricA": 33
              },
              {
                "name": "R9",
                "metricA": 18
              },
              {
                "name": "R5",
                "metricA": 5
              }
            ]
          }
        ]
      },
      {
        "name": "Supply chain",
        "charts": []
      },
      {
        "name": "Compliance",
        "charts": []
      }
    ]
  },
  "EventManagement": {
    "title": "Event Management Operations",
    "subtitle": "Interactive analytics and key metrics overview.",
    "kpis": [
      {
        "title": "OTIF / YIELD",
        "value": "86%",
        "change": "+1.4%",
        "subtext": "vs last mo",
        "icon": "Activity",
        "color": "emerald"
      },
      {
        "title": "LEAD TIME",
        "value": "54d",
        "change": "-2.2%",
        "subtext": "vs last mo",
        "icon": "Box",
        "color": "amber"
      },
      {
        "title": "COMPLIANCE",
        "value": "94%",
        "change": "+1.6%",
        "subtext": "vs audit",
        "icon": "ShieldCheck",
        "color": "emerald"
      },
      {
        "title": "UPTIME",
        "value": "96%",
        "change": "+0.6%",
        "subtext": "vs last mo",
        "icon": "Database",
        "color": "emerald"
      }
    ],
    "tabs": [
      {
        "name": "Overview",
        "charts": [
          {
            "type": "LineChart",
            "title": "Performance Trends",
            "subtext": "Core metrics over the last 6 months",
            "badge": "Live view",
            "dataKey": [
              "metricA",
              "metricB"
            ],
            "colors": [
              "#2dd4bf",
              "#fbbf24"
            ],
            "data": [
              {
                "name": "M1",
                "metricA": 90,
                "metricB": 37
              },
              {
                "name": "M2",
                "metricA": 82,
                "metricB": 49
              },
              {
                "name": "M3",
                "metricA": 90,
                "metricB": 71
              },
              {
                "name": "M4",
                "metricA": 86,
                "metricB": 36
              },
              {
                "name": "M5",
                "metricA": 64,
                "metricB": 72
              },
              {
                "name": "M6",
                "metricA": 90,
                "metricB": 61
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Top Risks/Anomalies",
            "subtext": "Click a bar to focus (Top 10)",
            "badge": "10 items",
            "dataKey": [
              "metricA"
            ],
            "colors": [
              "url(#colorAmber)"
            ],
            "data": [
              {
                "name": "R8",
                "metricA": 89
              },
              {
                "name": "R4",
                "metricA": 88
              },
              {
                "name": "R9",
                "metricA": 82
              },
              {
                "name": "R1",
                "metricA": 68
              },
              {
                "name": "R3",
                "metricA": 45
              },
              {
                "name": "R5",
                "metricA": 34
              },
              {
                "name": "R10",
                "metricA": 31
              },
              {
                "name": "R2",
                "metricA": 26
              },
              {
                "name": "R6",
                "metricA": 17
              },
              {
                "name": "R7",
                "metricA": 5
              }
            ]
          }
        ]
      },
      {
        "name": "Supply chain",
        "charts": []
      },
      {
        "name": "Compliance",
        "charts": []
      }
    ]
  },
  "Finance": {
    "title": "Finance Operations",
    "subtitle": "Interactive analytics and key metrics overview.",
    "kpis": [
      {
        "title": "OTIF / YIELD",
        "value": "93%",
        "change": "+0.3%",
        "subtext": "vs last mo",
        "icon": "Activity",
        "color": "emerald"
      },
      {
        "title": "LEAD TIME",
        "value": "44d",
        "change": "-1.4%",
        "subtext": "vs last mo",
        "icon": "Box",
        "color": "amber"
      },
      {
        "title": "COMPLIANCE",
        "value": "85%",
        "change": "+0.5%",
        "subtext": "vs audit",
        "icon": "ShieldCheck",
        "color": "emerald"
      },
      {
        "title": "UPTIME",
        "value": "97%",
        "change": "+0.0%",
        "subtext": "vs last mo",
        "icon": "Database",
        "color": "emerald"
      }
    ],
    "tabs": [
      {
        "name": "Overview",
        "charts": [
          {
            "type": "LineChart",
            "title": "Performance Trends",
            "subtext": "Core metrics over the last 6 months",
            "badge": "Live view",
            "dataKey": [
              "metricA",
              "metricB"
            ],
            "colors": [
              "#2dd4bf",
              "#fbbf24"
            ],
            "data": [
              {
                "name": "M1",
                "metricA": 68,
                "metricB": 61
              },
              {
                "name": "M2",
                "metricA": 84,
                "metricB": 76
              },
              {
                "name": "M3",
                "metricA": 51,
                "metricB": 43
              },
              {
                "name": "M4",
                "metricA": 56,
                "metricB": 78
              },
              {
                "name": "M5",
                "metricA": 83,
                "metricB": 58
              },
              {
                "name": "M6",
                "metricA": 62,
                "metricB": 77
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Top Risks/Anomalies",
            "subtext": "Click a bar to focus (Top 10)",
            "badge": "10 items",
            "dataKey": [
              "metricA"
            ],
            "colors": [
              "url(#colorAmber)"
            ],
            "data": [
              {
                "name": "R2",
                "metricA": 78
              },
              {
                "name": "R6",
                "metricA": 75
              },
              {
                "name": "R7",
                "metricA": 56
              },
              {
                "name": "R3",
                "metricA": 53
              },
              {
                "name": "R1",
                "metricA": 41
              },
              {
                "name": "R5",
                "metricA": 38
              },
              {
                "name": "R10",
                "metricA": 26
              },
              {
                "name": "R4",
                "metricA": 23
              },
              {
                "name": "R8",
                "metricA": 22
              },
              {
                "name": "R9",
                "metricA": 6
              }
            ]
          }
        ]
      },
      {
        "name": "Supply chain",
        "charts": []
      },
      {
        "name": "Compliance",
        "charts": []
      }
    ]
  },
  "FinancialServices": {
    "title": "Financial Services Operations",
    "subtitle": "Interactive analytics and key metrics overview.",
    "kpis": [
      {
        "title": "OTIF / YIELD",
        "value": "99%",
        "change": "+1.0%",
        "subtext": "vs last mo",
        "icon": "Activity",
        "color": "emerald"
      },
      {
        "title": "LEAD TIME",
        "value": "21d",
        "change": "-1.7%",
        "subtext": "vs last mo",
        "icon": "Box",
        "color": "amber"
      },
      {
        "title": "COMPLIANCE",
        "value": "86%",
        "change": "+1.6%",
        "subtext": "vs audit",
        "icon": "ShieldCheck",
        "color": "emerald"
      },
      {
        "title": "UPTIME",
        "value": "91%",
        "change": "+0.3%",
        "subtext": "vs last mo",
        "icon": "Database",
        "color": "emerald"
      }
    ],
    "tabs": [
      {
        "name": "Overview",
        "charts": [
          {
            "type": "LineChart",
            "title": "Performance Trends",
            "subtext": "Core metrics over the last 6 months",
            "badge": "Live view",
            "dataKey": [
              "metricA",
              "metricB"
            ],
            "colors": [
              "#2dd4bf",
              "#fbbf24"
            ],
            "data": [
              {
                "name": "M1",
                "metricA": 72,
                "metricB": 64
              },
              {
                "name": "M2",
                "metricA": 71,
                "metricB": 41
              },
              {
                "name": "M3",
                "metricA": 56,
                "metricB": 38
              },
              {
                "name": "M4",
                "metricA": 74,
                "metricB": 64
              },
              {
                "name": "M5",
                "metricA": 55,
                "metricB": 63
              },
              {
                "name": "M6",
                "metricA": 69,
                "metricB": 45
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Top Risks/Anomalies",
            "subtext": "Click a bar to focus (Top 10)",
            "badge": "10 items",
            "dataKey": [
              "metricA"
            ],
            "colors": [
              "url(#colorAmber)"
            ],
            "data": [
              {
                "name": "R7",
                "metricA": 99
              },
              {
                "name": "R5",
                "metricA": 89
              },
              {
                "name": "R6",
                "metricA": 80
              },
              {
                "name": "R8",
                "metricA": 69
              },
              {
                "name": "R3",
                "metricA": 60
              },
              {
                "name": "R4",
                "metricA": 54
              },
              {
                "name": "R1",
                "metricA": 49
              },
              {
                "name": "R9",
                "metricA": 33
              },
              {
                "name": "R10",
                "metricA": 29
              },
              {
                "name": "R2",
                "metricA": 27
              }
            ]
          }
        ]
      },
      {
        "name": "Supply chain",
        "charts": []
      },
      {
        "name": "Compliance",
        "charts": []
      }
    ]
  },
  "FmcgFastMovingConsumerGoods": {
    "title": "Fmcg Fast Moving Consumer Goods Operations",
    "subtitle": "Interactive analytics and key metrics overview.",
    "kpis": [
      {
        "title": "OTIF / YIELD",
        "value": "82%",
        "change": "+1.0%",
        "subtext": "vs last mo",
        "icon": "Activity",
        "color": "emerald"
      },
      {
        "title": "LEAD TIME",
        "value": "36d",
        "change": "-2.2%",
        "subtext": "vs last mo",
        "icon": "Box",
        "color": "amber"
      },
      {
        "title": "COMPLIANCE",
        "value": "97%",
        "change": "+1.2%",
        "subtext": "vs audit",
        "icon": "ShieldCheck",
        "color": "emerald"
      },
      {
        "title": "UPTIME",
        "value": "98%",
        "change": "+0.6%",
        "subtext": "vs last mo",
        "icon": "Database",
        "color": "emerald"
      }
    ],
    "tabs": [
      {
        "name": "Overview",
        "charts": [
          {
            "type": "LineChart",
            "title": "Performance Trends",
            "subtext": "Core metrics over the last 6 months",
            "badge": "Live view",
            "dataKey": [
              "metricA",
              "metricB"
            ],
            "colors": [
              "#2dd4bf",
              "#fbbf24"
            ],
            "data": [
              {
                "name": "M1",
                "metricA": 84,
                "metricB": 62
              },
              {
                "name": "M2",
                "metricA": 57,
                "metricB": 78
              },
              {
                "name": "M3",
                "metricA": 75,
                "metricB": 61
              },
              {
                "name": "M4",
                "metricA": 68,
                "metricB": 60
              },
              {
                "name": "M5",
                "metricA": 59,
                "metricB": 55
              },
              {
                "name": "M6",
                "metricA": 69,
                "metricB": 48
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Top Risks/Anomalies",
            "subtext": "Click a bar to focus (Top 10)",
            "badge": "10 items",
            "dataKey": [
              "metricA"
            ],
            "colors": [
              "url(#colorAmber)"
            ],
            "data": [
              {
                "name": "R5",
                "metricA": 97
              },
              {
                "name": "R1",
                "metricA": 91
              },
              {
                "name": "R6",
                "metricA": 91
              },
              {
                "name": "R7",
                "metricA": 79
              },
              {
                "name": "R9",
                "metricA": 76
              },
              {
                "name": "R8",
                "metricA": 57
              },
              {
                "name": "R3",
                "metricA": 39
              },
              {
                "name": "R4",
                "metricA": 36
              },
              {
                "name": "R10",
                "metricA": 32
              },
              {
                "name": "R2",
                "metricA": 18
              }
            ]
          }
        ]
      },
      {
        "name": "Supply chain",
        "charts": []
      },
      {
        "name": "Compliance",
        "charts": []
      }
    ]
  },
  "GovernmentAndPublicSector": {
    "title": "Government And Public Sector Operations",
    "subtitle": "Interactive analytics and key metrics overview.",
    "kpis": [
      {
        "title": "OTIF / YIELD",
        "value": "83%",
        "change": "+1.6%",
        "subtext": "vs last mo",
        "icon": "Activity",
        "color": "emerald"
      },
      {
        "title": "LEAD TIME",
        "value": "23d",
        "change": "-0.7%",
        "subtext": "vs last mo",
        "icon": "Box",
        "color": "amber"
      },
      {
        "title": "COMPLIANCE",
        "value": "93%",
        "change": "+0.2%",
        "subtext": "vs audit",
        "icon": "ShieldCheck",
        "color": "emerald"
      },
      {
        "title": "UPTIME",
        "value": "96%",
        "change": "+0.7%",
        "subtext": "vs last mo",
        "icon": "Database",
        "color": "emerald"
      }
    ],
    "tabs": [
      {
        "name": "Overview",
        "charts": [
          {
            "type": "LineChart",
            "title": "Performance Trends",
            "subtext": "Core metrics over the last 6 months",
            "badge": "Live view",
            "dataKey": [
              "metricA",
              "metricB"
            ],
            "colors": [
              "#2dd4bf",
              "#fbbf24"
            ],
            "data": [
              {
                "name": "M1",
                "metricA": 74,
                "metricB": 31
              },
              {
                "name": "M2",
                "metricA": 76,
                "metricB": 42
              },
              {
                "name": "M3",
                "metricA": 58,
                "metricB": 61
              },
              {
                "name": "M4",
                "metricA": 60,
                "metricB": 56
              },
              {
                "name": "M5",
                "metricA": 83,
                "metricB": 71
              },
              {
                "name": "M6",
                "metricA": 84,
                "metricB": 36
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Top Risks/Anomalies",
            "subtext": "Click a bar to focus (Top 10)",
            "badge": "10 items",
            "dataKey": [
              "metricA"
            ],
            "colors": [
              "url(#colorAmber)"
            ],
            "data": [
              {
                "name": "R4",
                "metricA": 81
              },
              {
                "name": "R7",
                "metricA": 72
              },
              {
                "name": "R6",
                "metricA": 64
              },
              {
                "name": "R9",
                "metricA": 49
              },
              {
                "name": "R5",
                "metricA": 28
              },
              {
                "name": "R1",
                "metricA": 18
              },
              {
                "name": "R2",
                "metricA": 13
              },
              {
                "name": "R10",
                "metricA": 11
              },
              {
                "name": "R3",
                "metricA": 3
              },
              {
                "name": "R8",
                "metricA": 2
              }
            ]
          }
        ]
      },
      {
        "name": "Supply chain",
        "charts": []
      },
      {
        "name": "Compliance",
        "charts": []
      }
    ]
  },
  "Healthcare": {
    "title": "Healthcare Operations",
    "subtitle": "Interactive analytics and key metrics overview.",
    "kpis": [
      {
        "title": "OTIF / YIELD",
        "value": "82%",
        "change": "+1.4%",
        "subtext": "vs last mo",
        "icon": "Activity",
        "color": "emerald"
      },
      {
        "title": "LEAD TIME",
        "value": "22d",
        "change": "-0.4%",
        "subtext": "vs last mo",
        "icon": "Box",
        "color": "amber"
      },
      {
        "title": "COMPLIANCE",
        "value": "89%",
        "change": "+1.2%",
        "subtext": "vs audit",
        "icon": "ShieldCheck",
        "color": "emerald"
      },
      {
        "title": "UPTIME",
        "value": "91%",
        "change": "+0.7%",
        "subtext": "vs last mo",
        "icon": "Database",
        "color": "emerald"
      }
    ],
    "tabs": [
      {
        "name": "Overview",
        "charts": [
          {
            "type": "LineChart",
            "title": "Performance Trends",
            "subtext": "Core metrics over the last 6 months",
            "badge": "Live view",
            "dataKey": [
              "metricA",
              "metricB"
            ],
            "colors": [
              "#2dd4bf",
              "#fbbf24"
            ],
            "data": [
              {
                "name": "M1",
                "metricA": 71,
                "metricB": 31
              },
              {
                "name": "M2",
                "metricA": 51,
                "metricB": 44
              },
              {
                "name": "M3",
                "metricA": 55,
                "metricB": 33
              },
              {
                "name": "M4",
                "metricA": 92,
                "metricB": 55
              },
              {
                "name": "M5",
                "metricA": 78,
                "metricB": 67
              },
              {
                "name": "M6",
                "metricA": 76,
                "metricB": 76
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Top Risks/Anomalies",
            "subtext": "Click a bar to focus (Top 10)",
            "badge": "10 items",
            "dataKey": [
              "metricA"
            ],
            "colors": [
              "url(#colorAmber)"
            ],
            "data": [
              {
                "name": "R10",
                "metricA": 94
              },
              {
                "name": "R7",
                "metricA": 61
              },
              {
                "name": "R4",
                "metricA": 47
              },
              {
                "name": "R8",
                "metricA": 44
              },
              {
                "name": "R6",
                "metricA": 30
              },
              {
                "name": "R2",
                "metricA": 24
              },
              {
                "name": "R5",
                "metricA": 23
              },
              {
                "name": "R1",
                "metricA": 16
              },
              {
                "name": "R3",
                "metricA": 15
              },
              {
                "name": "R9",
                "metricA": 3
              }
            ]
          }
        ]
      },
      {
        "name": "Supply chain",
        "charts": []
      },
      {
        "name": "Compliance",
        "charts": []
      }
    ]
  },
  "Hospitality": {
    "title": "Hospitality Operations",
    "subtitle": "Interactive analytics and key metrics overview.",
    "kpis": [
      {
        "title": "OTIF / YIELD",
        "value": "88%",
        "change": "+2.0%",
        "subtext": "vs last mo",
        "icon": "Activity",
        "color": "emerald"
      },
      {
        "title": "LEAD TIME",
        "value": "41d",
        "change": "-3.0%",
        "subtext": "vs last mo",
        "icon": "Box",
        "color": "amber"
      },
      {
        "title": "COMPLIANCE",
        "value": "98%",
        "change": "+1.3%",
        "subtext": "vs audit",
        "icon": "ShieldCheck",
        "color": "emerald"
      },
      {
        "title": "UPTIME",
        "value": "92%",
        "change": "+0.7%",
        "subtext": "vs last mo",
        "icon": "Database",
        "color": "emerald"
      }
    ],
    "tabs": [
      {
        "name": "Overview",
        "charts": [
          {
            "type": "LineChart",
            "title": "Performance Trends",
            "subtext": "Core metrics over the last 6 months",
            "badge": "Live view",
            "dataKey": [
              "metricA",
              "metricB"
            ],
            "colors": [
              "#2dd4bf",
              "#fbbf24"
            ],
            "data": [
              {
                "name": "M1",
                "metricA": 93,
                "metricB": 53
              },
              {
                "name": "M2",
                "metricA": 70,
                "metricB": 66
              },
              {
                "name": "M3",
                "metricA": 81,
                "metricB": 42
              },
              {
                "name": "M4",
                "metricA": 68,
                "metricB": 67
              },
              {
                "name": "M5",
                "metricA": 68,
                "metricB": 38
              },
              {
                "name": "M6",
                "metricA": 66,
                "metricB": 37
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Top Risks/Anomalies",
            "subtext": "Click a bar to focus (Top 10)",
            "badge": "10 items",
            "dataKey": [
              "metricA"
            ],
            "colors": [
              "url(#colorAmber)"
            ],
            "data": [
              {
                "name": "R2",
                "metricA": 95
              },
              {
                "name": "R6",
                "metricA": 91
              },
              {
                "name": "R10",
                "metricA": 86
              },
              {
                "name": "R4",
                "metricA": 77
              },
              {
                "name": "R9",
                "metricA": 73
              },
              {
                "name": "R1",
                "metricA": 52
              },
              {
                "name": "R3",
                "metricA": 37
              },
              {
                "name": "R8",
                "metricA": 20
              },
              {
                "name": "R5",
                "metricA": 15
              },
              {
                "name": "R7",
                "metricA": 9
              }
            ]
          }
        ]
      },
      {
        "name": "Supply chain",
        "charts": []
      },
      {
        "name": "Compliance",
        "charts": []
      }
    ]
  },
  "Insurance": {
    "title": "Insurance Operations",
    "subtitle": "Interactive analytics and key metrics overview.",
    "kpis": [
      {
        "title": "OTIF / YIELD",
        "value": "87%",
        "change": "+0.5%",
        "subtext": "vs last mo",
        "icon": "Activity",
        "color": "emerald"
      },
      {
        "title": "LEAD TIME",
        "value": "54d",
        "change": "-2.7%",
        "subtext": "vs last mo",
        "icon": "Box",
        "color": "amber"
      },
      {
        "title": "COMPLIANCE",
        "value": "97%",
        "change": "+0.9%",
        "subtext": "vs audit",
        "icon": "ShieldCheck",
        "color": "emerald"
      },
      {
        "title": "UPTIME",
        "value": "91%",
        "change": "+0.4%",
        "subtext": "vs last mo",
        "icon": "Database",
        "color": "emerald"
      }
    ],
    "tabs": [
      {
        "name": "Overview",
        "charts": [
          {
            "type": "LineChart",
            "title": "Performance Trends",
            "subtext": "Core metrics over the last 6 months",
            "badge": "Live view",
            "dataKey": [
              "metricA",
              "metricB"
            ],
            "colors": [
              "#2dd4bf",
              "#fbbf24"
            ],
            "data": [
              {
                "name": "M1",
                "metricA": 56,
                "metricB": 49
              },
              {
                "name": "M2",
                "metricA": 68,
                "metricB": 78
              },
              {
                "name": "M3",
                "metricA": 65,
                "metricB": 61
              },
              {
                "name": "M4",
                "metricA": 82,
                "metricB": 40
              },
              {
                "name": "M5",
                "metricA": 91,
                "metricB": 74
              },
              {
                "name": "M6",
                "metricA": 70,
                "metricB": 51
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Top Risks/Anomalies",
            "subtext": "Click a bar to focus (Top 10)",
            "badge": "10 items",
            "dataKey": [
              "metricA"
            ],
            "colors": [
              "url(#colorAmber)"
            ],
            "data": [
              {
                "name": "R3",
                "metricA": 99
              },
              {
                "name": "R8",
                "metricA": 85
              },
              {
                "name": "R6",
                "metricA": 77
              },
              {
                "name": "R9",
                "metricA": 72
              },
              {
                "name": "R1",
                "metricA": 61
              },
              {
                "name": "R2",
                "metricA": 60
              },
              {
                "name": "R10",
                "metricA": 43
              },
              {
                "name": "R5",
                "metricA": 35
              },
              {
                "name": "R4",
                "metricA": 15
              },
              {
                "name": "R7",
                "metricA": 6
              }
            ]
          }
        ]
      },
      {
        "name": "Supply chain",
        "charts": []
      },
      {
        "name": "Compliance",
        "charts": []
      }
    ]
  },
  "LegalServices": {
    "title": "Legal Services Operations",
    "subtitle": "Interactive analytics and key metrics overview.",
    "kpis": [
      {
        "title": "OTIF / YIELD",
        "value": "96%",
        "change": "+2.1%",
        "subtext": "vs last mo",
        "icon": "Activity",
        "color": "emerald"
      },
      {
        "title": "LEAD TIME",
        "value": "24d",
        "change": "-1.5%",
        "subtext": "vs last mo",
        "icon": "Box",
        "color": "amber"
      },
      {
        "title": "COMPLIANCE",
        "value": "92%",
        "change": "+0.9%",
        "subtext": "vs audit",
        "icon": "ShieldCheck",
        "color": "emerald"
      },
      {
        "title": "UPTIME",
        "value": "94%",
        "change": "+0.2%",
        "subtext": "vs last mo",
        "icon": "Database",
        "color": "emerald"
      }
    ],
    "tabs": [
      {
        "name": "Overview",
        "charts": [
          {
            "type": "LineChart",
            "title": "Performance Trends",
            "subtext": "Core metrics over the last 6 months",
            "badge": "Live view",
            "dataKey": [
              "metricA",
              "metricB"
            ],
            "colors": [
              "#2dd4bf",
              "#fbbf24"
            ],
            "data": [
              {
                "name": "M1",
                "metricA": 50,
                "metricB": 64
              },
              {
                "name": "M2",
                "metricA": 67,
                "metricB": 67
              },
              {
                "name": "M3",
                "metricA": 83,
                "metricB": 37
              },
              {
                "name": "M4",
                "metricA": 71,
                "metricB": 70
              },
              {
                "name": "M5",
                "metricA": 57,
                "metricB": 74
              },
              {
                "name": "M6",
                "metricA": 87,
                "metricB": 49
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Top Risks/Anomalies",
            "subtext": "Click a bar to focus (Top 10)",
            "badge": "10 items",
            "dataKey": [
              "metricA"
            ],
            "colors": [
              "url(#colorAmber)"
            ],
            "data": [
              {
                "name": "R1",
                "metricA": 87
              },
              {
                "name": "R7",
                "metricA": 87
              },
              {
                "name": "R4",
                "metricA": 82
              },
              {
                "name": "R9",
                "metricA": 63
              },
              {
                "name": "R8",
                "metricA": 52
              },
              {
                "name": "R5",
                "metricA": 35
              },
              {
                "name": "R10",
                "metricA": 22
              },
              {
                "name": "R2",
                "metricA": 17
              },
              {
                "name": "R3",
                "metricA": 3
              },
              {
                "name": "R6",
                "metricA": 0
              }
            ]
          }
        ]
      },
      {
        "name": "Supply chain",
        "charts": []
      },
      {
        "name": "Compliance",
        "charts": []
      }
    ]
  },
  "LogisticsAndSupplyChain": {
    "title": "Logistics And Supply Chain Operations",
    "subtitle": "Interactive analytics and key metrics overview.",
    "kpis": [
      {
        "title": "OTIF / YIELD",
        "value": "85%",
        "change": "+1.1%",
        "subtext": "vs last mo",
        "icon": "Activity",
        "color": "emerald"
      },
      {
        "title": "LEAD TIME",
        "value": "52d",
        "change": "-2.9%",
        "subtext": "vs last mo",
        "icon": "Box",
        "color": "amber"
      },
      {
        "title": "COMPLIANCE",
        "value": "91%",
        "change": "+0.2%",
        "subtext": "vs audit",
        "icon": "ShieldCheck",
        "color": "emerald"
      },
      {
        "title": "UPTIME",
        "value": "98%",
        "change": "+0.4%",
        "subtext": "vs last mo",
        "icon": "Database",
        "color": "emerald"
      }
    ],
    "tabs": [
      {
        "name": "Overview",
        "charts": [
          {
            "type": "LineChart",
            "title": "Performance Trends",
            "subtext": "Core metrics over the last 6 months",
            "badge": "Live view",
            "dataKey": [
              "metricA",
              "metricB"
            ],
            "colors": [
              "#2dd4bf",
              "#fbbf24"
            ],
            "data": [
              {
                "name": "M1",
                "metricA": 92,
                "metricB": 56
              },
              {
                "name": "M2",
                "metricA": 80,
                "metricB": 69
              },
              {
                "name": "M3",
                "metricA": 73,
                "metricB": 37
              },
              {
                "name": "M4",
                "metricA": 64,
                "metricB": 74
              },
              {
                "name": "M5",
                "metricA": 92,
                "metricB": 60
              },
              {
                "name": "M6",
                "metricA": 78,
                "metricB": 63
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Top Risks/Anomalies",
            "subtext": "Click a bar to focus (Top 10)",
            "badge": "10 items",
            "dataKey": [
              "metricA"
            ],
            "colors": [
              "url(#colorAmber)"
            ],
            "data": [
              {
                "name": "R5",
                "metricA": 95
              },
              {
                "name": "R7",
                "metricA": 83
              },
              {
                "name": "R3",
                "metricA": 80
              },
              {
                "name": "R1",
                "metricA": 72
              },
              {
                "name": "R8",
                "metricA": 68
              },
              {
                "name": "R2",
                "metricA": 24
              },
              {
                "name": "R10",
                "metricA": 24
              },
              {
                "name": "R6",
                "metricA": 23
              },
              {
                "name": "R4",
                "metricA": 15
              },
              {
                "name": "R9",
                "metricA": 0
              }
            ]
          }
        ]
      },
      {
        "name": "Supply chain",
        "charts": []
      },
      {
        "name": "Compliance",
        "charts": []
      }
    ]
  },
  "Manufacturing": {
    "title": "Manufacturing Operations",
    "subtitle": "Interactive analytics and key metrics overview.",
    "kpis": [
      {
        "title": "OTIF / YIELD",
        "value": "91%",
        "change": "+0.7%",
        "subtext": "vs last mo",
        "icon": "Activity",
        "color": "emerald"
      },
      {
        "title": "LEAD TIME",
        "value": "51d",
        "change": "-2.6%",
        "subtext": "vs last mo",
        "icon": "Box",
        "color": "amber"
      },
      {
        "title": "COMPLIANCE",
        "value": "94%",
        "change": "+0.6%",
        "subtext": "vs audit",
        "icon": "ShieldCheck",
        "color": "emerald"
      },
      {
        "title": "UPTIME",
        "value": "96%",
        "change": "+0.3%",
        "subtext": "vs last mo",
        "icon": "Database",
        "color": "emerald"
      }
    ],
    "tabs": [
      {
        "name": "Overview",
        "charts": [
          {
            "type": "LineChart",
            "title": "Performance Trends",
            "subtext": "Core metrics over the last 6 months",
            "badge": "Live view",
            "dataKey": [
              "metricA",
              "metricB"
            ],
            "colors": [
              "#2dd4bf",
              "#fbbf24"
            ],
            "data": [
              {
                "name": "M1",
                "metricA": 53,
                "metricB": 68
              },
              {
                "name": "M2",
                "metricA": 90,
                "metricB": 70
              },
              {
                "name": "M3",
                "metricA": 55,
                "metricB": 51
              },
              {
                "name": "M4",
                "metricA": 78,
                "metricB": 31
              },
              {
                "name": "M5",
                "metricA": 54,
                "metricB": 46
              },
              {
                "name": "M6",
                "metricA": 82,
                "metricB": 79
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Top Risks/Anomalies",
            "subtext": "Click a bar to focus (Top 10)",
            "badge": "10 items",
            "dataKey": [
              "metricA"
            ],
            "colors": [
              "url(#colorAmber)"
            ],
            "data": [
              {
                "name": "R10",
                "metricA": 88
              },
              {
                "name": "R3",
                "metricA": 54
              },
              {
                "name": "R7",
                "metricA": 51
              },
              {
                "name": "R4",
                "metricA": 47
              },
              {
                "name": "R2",
                "metricA": 43
              },
              {
                "name": "R6",
                "metricA": 39
              },
              {
                "name": "R9",
                "metricA": 25
              },
              {
                "name": "R8",
                "metricA": 23
              },
              {
                "name": "R1",
                "metricA": 18
              },
              {
                "name": "R5",
                "metricA": 5
              }
            ]
          }
        ]
      },
      {
        "name": "Supply chain",
        "charts": []
      },
      {
        "name": "Compliance",
        "charts": []
      }
    ]
  },
  "MediaAndEntertainment": {
    "title": "Media And Entertainment Operations",
    "subtitle": "Interactive analytics and key metrics overview.",
    "kpis": [
      {
        "title": "OTIF / YIELD",
        "value": "86%",
        "change": "+2.8%",
        "subtext": "vs last mo",
        "icon": "Activity",
        "color": "emerald"
      },
      {
        "title": "LEAD TIME",
        "value": "27d",
        "change": "-2.7%",
        "subtext": "vs last mo",
        "icon": "Box",
        "color": "amber"
      },
      {
        "title": "COMPLIANCE",
        "value": "89%",
        "change": "+0.5%",
        "subtext": "vs audit",
        "icon": "ShieldCheck",
        "color": "emerald"
      },
      {
        "title": "UPTIME",
        "value": "94%",
        "change": "+0.7%",
        "subtext": "vs last mo",
        "icon": "Database",
        "color": "emerald"
      }
    ],
    "tabs": [
      {
        "name": "Overview",
        "charts": [
          {
            "type": "LineChart",
            "title": "Performance Trends",
            "subtext": "Core metrics over the last 6 months",
            "badge": "Live view",
            "dataKey": [
              "metricA",
              "metricB"
            ],
            "colors": [
              "#2dd4bf",
              "#fbbf24"
            ],
            "data": [
              {
                "name": "M1",
                "metricA": 58,
                "metricB": 78
              },
              {
                "name": "M2",
                "metricA": 50,
                "metricB": 72
              },
              {
                "name": "M3",
                "metricA": 97,
                "metricB": 77
              },
              {
                "name": "M4",
                "metricA": 62,
                "metricB": 79
              },
              {
                "name": "M5",
                "metricA": 51,
                "metricB": 79
              },
              {
                "name": "M6",
                "metricA": 71,
                "metricB": 70
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Top Risks/Anomalies",
            "subtext": "Click a bar to focus (Top 10)",
            "badge": "10 items",
            "dataKey": [
              "metricA"
            ],
            "colors": [
              "url(#colorAmber)"
            ],
            "data": [
              {
                "name": "R3",
                "metricA": 81
              },
              {
                "name": "R2",
                "metricA": 75
              },
              {
                "name": "R7",
                "metricA": 70
              },
              {
                "name": "R8",
                "metricA": 64
              },
              {
                "name": "R10",
                "metricA": 57
              },
              {
                "name": "R1",
                "metricA": 52
              },
              {
                "name": "R9",
                "metricA": 33
              },
              {
                "name": "R6",
                "metricA": 23
              },
              {
                "name": "R4",
                "metricA": 12
              },
              {
                "name": "R5",
                "metricA": 6
              }
            ]
          }
        ]
      },
      {
        "name": "Supply chain",
        "charts": []
      },
      {
        "name": "Compliance",
        "charts": []
      }
    ]
  },
  "MiningAndNaturalResources": {
    "title": "Mining And Natural Resources Operations",
    "subtitle": "Interactive analytics and key metrics overview.",
    "kpis": [
      {
        "title": "OTIF / YIELD",
        "value": "98%",
        "change": "+0.8%",
        "subtext": "vs last mo",
        "icon": "Activity",
        "color": "emerald"
      },
      {
        "title": "LEAD TIME",
        "value": "56d",
        "change": "-1.0%",
        "subtext": "vs last mo",
        "icon": "Box",
        "color": "amber"
      },
      {
        "title": "COMPLIANCE",
        "value": "87%",
        "change": "+1.7%",
        "subtext": "vs audit",
        "icon": "ShieldCheck",
        "color": "emerald"
      },
      {
        "title": "UPTIME",
        "value": "97%",
        "change": "+0.7%",
        "subtext": "vs last mo",
        "icon": "Database",
        "color": "emerald"
      }
    ],
    "tabs": [
      {
        "name": "Overview",
        "charts": [
          {
            "type": "LineChart",
            "title": "Performance Trends",
            "subtext": "Core metrics over the last 6 months",
            "badge": "Live view",
            "dataKey": [
              "metricA",
              "metricB"
            ],
            "colors": [
              "#2dd4bf",
              "#fbbf24"
            ],
            "data": [
              {
                "name": "M1",
                "metricA": 52,
                "metricB": 49
              },
              {
                "name": "M2",
                "metricA": 81,
                "metricB": 75
              },
              {
                "name": "M3",
                "metricA": 88,
                "metricB": 67
              },
              {
                "name": "M4",
                "metricA": 68,
                "metricB": 75
              },
              {
                "name": "M5",
                "metricA": 68,
                "metricB": 52
              },
              {
                "name": "M6",
                "metricA": 93,
                "metricB": 59
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Top Risks/Anomalies",
            "subtext": "Click a bar to focus (Top 10)",
            "badge": "10 items",
            "dataKey": [
              "metricA"
            ],
            "colors": [
              "url(#colorAmber)"
            ],
            "data": [
              {
                "name": "R6",
                "metricA": 96
              },
              {
                "name": "R4",
                "metricA": 74
              },
              {
                "name": "R10",
                "metricA": 70
              },
              {
                "name": "R2",
                "metricA": 66
              },
              {
                "name": "R8",
                "metricA": 63
              },
              {
                "name": "R3",
                "metricA": 61
              },
              {
                "name": "R9",
                "metricA": 38
              },
              {
                "name": "R1",
                "metricA": 17
              },
              {
                "name": "R7",
                "metricA": 5
              },
              {
                "name": "R5",
                "metricA": 3
              }
            ]
          }
        ]
      },
      {
        "name": "Supply chain",
        "charts": []
      },
      {
        "name": "Compliance",
        "charts": []
      }
    ]
  },
  "NonprofitAndNgos": {
    "title": "Nonprofit And Ngos Operations",
    "subtitle": "Interactive analytics and key metrics overview.",
    "kpis": [
      {
        "title": "OTIF / YIELD",
        "value": "98%",
        "change": "+0.2%",
        "subtext": "vs last mo",
        "icon": "Activity",
        "color": "emerald"
      },
      {
        "title": "LEAD TIME",
        "value": "33d",
        "change": "-1.7%",
        "subtext": "vs last mo",
        "icon": "Box",
        "color": "amber"
      },
      {
        "title": "COMPLIANCE",
        "value": "94%",
        "change": "+1.4%",
        "subtext": "vs audit",
        "icon": "ShieldCheck",
        "color": "emerald"
      },
      {
        "title": "UPTIME",
        "value": "94%",
        "change": "+0.1%",
        "subtext": "vs last mo",
        "icon": "Database",
        "color": "emerald"
      }
    ],
    "tabs": [
      {
        "name": "Overview",
        "charts": [
          {
            "type": "LineChart",
            "title": "Performance Trends",
            "subtext": "Core metrics over the last 6 months",
            "badge": "Live view",
            "dataKey": [
              "metricA",
              "metricB"
            ],
            "colors": [
              "#2dd4bf",
              "#fbbf24"
            ],
            "data": [
              {
                "name": "M1",
                "metricA": 82,
                "metricB": 51
              },
              {
                "name": "M2",
                "metricA": 84,
                "metricB": 39
              },
              {
                "name": "M3",
                "metricA": 55,
                "metricB": 31
              },
              {
                "name": "M4",
                "metricA": 91,
                "metricB": 70
              },
              {
                "name": "M5",
                "metricA": 67,
                "metricB": 58
              },
              {
                "name": "M6",
                "metricA": 62,
                "metricB": 39
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Top Risks/Anomalies",
            "subtext": "Click a bar to focus (Top 10)",
            "badge": "10 items",
            "dataKey": [
              "metricA"
            ],
            "colors": [
              "url(#colorAmber)"
            ],
            "data": [
              {
                "name": "R7",
                "metricA": 94
              },
              {
                "name": "R6",
                "metricA": 77
              },
              {
                "name": "R10",
                "metricA": 57
              },
              {
                "name": "R2",
                "metricA": 54
              },
              {
                "name": "R5",
                "metricA": 41
              },
              {
                "name": "R1",
                "metricA": 38
              },
              {
                "name": "R9",
                "metricA": 27
              },
              {
                "name": "R3",
                "metricA": 20
              },
              {
                "name": "R8",
                "metricA": 7
              },
              {
                "name": "R4",
                "metricA": 3
              }
            ]
          }
        ]
      },
      {
        "name": "Supply chain",
        "charts": []
      },
      {
        "name": "Compliance",
        "charts": []
      }
    ]
  },
  "Pharmaceuticals": {
    "title": "Pharmaceuticals Operations",
    "subtitle": "Interactive analytics and key metrics overview.",
    "kpis": [
      {
        "title": "OTIF / YIELD",
        "value": "96%",
        "change": "+0.4%",
        "subtext": "vs last mo",
        "icon": "Activity",
        "color": "emerald"
      },
      {
        "title": "LEAD TIME",
        "value": "40d",
        "change": "-0.1%",
        "subtext": "vs last mo",
        "icon": "Box",
        "color": "amber"
      },
      {
        "title": "COMPLIANCE",
        "value": "85%",
        "change": "+1.9%",
        "subtext": "vs audit",
        "icon": "ShieldCheck",
        "color": "emerald"
      },
      {
        "title": "UPTIME",
        "value": "90%",
        "change": "+0.4%",
        "subtext": "vs last mo",
        "icon": "Database",
        "color": "emerald"
      }
    ],
    "tabs": [
      {
        "name": "Overview",
        "charts": [
          {
            "type": "LineChart",
            "title": "Performance Trends",
            "subtext": "Core metrics over the last 6 months",
            "badge": "Live view",
            "dataKey": [
              "metricA",
              "metricB"
            ],
            "colors": [
              "#2dd4bf",
              "#fbbf24"
            ],
            "data": [
              {
                "name": "M1",
                "metricA": 89,
                "metricB": 58
              },
              {
                "name": "M2",
                "metricA": 83,
                "metricB": 55
              },
              {
                "name": "M3",
                "metricA": 84,
                "metricB": 44
              },
              {
                "name": "M4",
                "metricA": 99,
                "metricB": 34
              },
              {
                "name": "M5",
                "metricA": 86,
                "metricB": 73
              },
              {
                "name": "M6",
                "metricA": 70,
                "metricB": 46
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Top Risks/Anomalies",
            "subtext": "Click a bar to focus (Top 10)",
            "badge": "10 items",
            "dataKey": [
              "metricA"
            ],
            "colors": [
              "url(#colorAmber)"
            ],
            "data": [
              {
                "name": "R2",
                "metricA": 85
              },
              {
                "name": "R3",
                "metricA": 77
              },
              {
                "name": "R4",
                "metricA": 73
              },
              {
                "name": "R10",
                "metricA": 73
              },
              {
                "name": "R6",
                "metricA": 67
              },
              {
                "name": "R9",
                "metricA": 55
              },
              {
                "name": "R8",
                "metricA": 46
              },
              {
                "name": "R1",
                "metricA": 28
              },
              {
                "name": "R5",
                "metricA": 27
              },
              {
                "name": "R7",
                "metricA": 1
              }
            ]
          }
        ]
      },
      {
        "name": "Supply chain",
        "charts": []
      },
      {
        "name": "Compliance",
        "charts": []
      }
    ]
  },
  "ProfessionalServices": {
    "title": "Professional Services Operations",
    "subtitle": "Interactive analytics and key metrics overview.",
    "kpis": [
      {
        "title": "OTIF / YIELD",
        "value": "87%",
        "change": "+0.3%",
        "subtext": "vs last mo",
        "icon": "Activity",
        "color": "emerald"
      },
      {
        "title": "LEAD TIME",
        "value": "28d",
        "change": "-2.1%",
        "subtext": "vs last mo",
        "icon": "Box",
        "color": "amber"
      },
      {
        "title": "COMPLIANCE",
        "value": "93%",
        "change": "+1.3%",
        "subtext": "vs audit",
        "icon": "ShieldCheck",
        "color": "emerald"
      },
      {
        "title": "UPTIME",
        "value": "91%",
        "change": "+0.1%",
        "subtext": "vs last mo",
        "icon": "Database",
        "color": "emerald"
      }
    ],
    "tabs": [
      {
        "name": "Overview",
        "charts": [
          {
            "type": "LineChart",
            "title": "Performance Trends",
            "subtext": "Core metrics over the last 6 months",
            "badge": "Live view",
            "dataKey": [
              "metricA",
              "metricB"
            ],
            "colors": [
              "#2dd4bf",
              "#fbbf24"
            ],
            "data": [
              {
                "name": "M1",
                "metricA": 60,
                "metricB": 59
              },
              {
                "name": "M2",
                "metricA": 66,
                "metricB": 38
              },
              {
                "name": "M3",
                "metricA": 91,
                "metricB": 31
              },
              {
                "name": "M4",
                "metricA": 69,
                "metricB": 44
              },
              {
                "name": "M5",
                "metricA": 75,
                "metricB": 48
              },
              {
                "name": "M6",
                "metricA": 75,
                "metricB": 45
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Top Risks/Anomalies",
            "subtext": "Click a bar to focus (Top 10)",
            "badge": "10 items",
            "dataKey": [
              "metricA"
            ],
            "colors": [
              "url(#colorAmber)"
            ],
            "data": [
              {
                "name": "R10",
                "metricA": 97
              },
              {
                "name": "R4",
                "metricA": 96
              },
              {
                "name": "R8",
                "metricA": 89
              },
              {
                "name": "R9",
                "metricA": 83
              },
              {
                "name": "R2",
                "metricA": 56
              },
              {
                "name": "R5",
                "metricA": 45
              },
              {
                "name": "R7",
                "metricA": 41
              },
              {
                "name": "R3",
                "metricA": 39
              },
              {
                "name": "R1",
                "metricA": 10
              },
              {
                "name": "R6",
                "metricA": 3
              }
            ]
          }
        ]
      },
      {
        "name": "Supply chain",
        "charts": []
      },
      {
        "name": "Compliance",
        "charts": []
      }
    ]
  },
  "RealEstate": {
    "title": "Real Estate Operations",
    "subtitle": "Interactive analytics and key metrics overview.",
    "kpis": [
      {
        "title": "OTIF / YIELD",
        "value": "84%",
        "change": "+1.1%",
        "subtext": "vs last mo",
        "icon": "Activity",
        "color": "emerald"
      },
      {
        "title": "LEAD TIME",
        "value": "28d",
        "change": "-1.2%",
        "subtext": "vs last mo",
        "icon": "Box",
        "color": "amber"
      },
      {
        "title": "COMPLIANCE",
        "value": "96%",
        "change": "+0.7%",
        "subtext": "vs audit",
        "icon": "ShieldCheck",
        "color": "emerald"
      },
      {
        "title": "UPTIME",
        "value": "91%",
        "change": "+0.3%",
        "subtext": "vs last mo",
        "icon": "Database",
        "color": "emerald"
      }
    ],
    "tabs": [
      {
        "name": "Overview",
        "charts": [
          {
            "type": "LineChart",
            "title": "Performance Trends",
            "subtext": "Core metrics over the last 6 months",
            "badge": "Live view",
            "dataKey": [
              "metricA",
              "metricB"
            ],
            "colors": [
              "#2dd4bf",
              "#fbbf24"
            ],
            "data": [
              {
                "name": "M1",
                "metricA": 76,
                "metricB": 78
              },
              {
                "name": "M2",
                "metricA": 88,
                "metricB": 30
              },
              {
                "name": "M3",
                "metricA": 63,
                "metricB": 42
              },
              {
                "name": "M4",
                "metricA": 88,
                "metricB": 58
              },
              {
                "name": "M5",
                "metricA": 67,
                "metricB": 42
              },
              {
                "name": "M6",
                "metricA": 87,
                "metricB": 44
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Top Risks/Anomalies",
            "subtext": "Click a bar to focus (Top 10)",
            "badge": "10 items",
            "dataKey": [
              "metricA"
            ],
            "colors": [
              "url(#colorAmber)"
            ],
            "data": [
              {
                "name": "R6",
                "metricA": 97
              },
              {
                "name": "R3",
                "metricA": 79
              },
              {
                "name": "R2",
                "metricA": 71
              },
              {
                "name": "R1",
                "metricA": 64
              },
              {
                "name": "R9",
                "metricA": 62
              },
              {
                "name": "R7",
                "metricA": 39
              },
              {
                "name": "R8",
                "metricA": 26
              },
              {
                "name": "R4",
                "metricA": 13
              },
              {
                "name": "R10",
                "metricA": 8
              },
              {
                "name": "R5",
                "metricA": 5
              }
            ]
          }
        ]
      },
      {
        "name": "Supply chain",
        "charts": []
      },
      {
        "name": "Compliance",
        "charts": []
      }
    ]
  },
  "Retail": {
    "title": "Retail Operations",
    "subtitle": "Interactive analytics and key metrics overview.",
    "kpis": [
      {
        "title": "OTIF / YIELD",
        "value": "82%",
        "change": "+1.2%",
        "subtext": "vs last mo",
        "icon": "Activity",
        "color": "emerald"
      },
      {
        "title": "LEAD TIME",
        "value": "51d",
        "change": "-1.1%",
        "subtext": "vs last mo",
        "icon": "Box",
        "color": "amber"
      },
      {
        "title": "COMPLIANCE",
        "value": "98%",
        "change": "+0.4%",
        "subtext": "vs audit",
        "icon": "ShieldCheck",
        "color": "emerald"
      },
      {
        "title": "UPTIME",
        "value": "91%",
        "change": "+0.4%",
        "subtext": "vs last mo",
        "icon": "Database",
        "color": "emerald"
      }
    ],
    "tabs": [
      {
        "name": "Overview",
        "charts": [
          {
            "type": "LineChart",
            "title": "Performance Trends",
            "subtext": "Core metrics over the last 6 months",
            "badge": "Live view",
            "dataKey": [
              "metricA",
              "metricB"
            ],
            "colors": [
              "#2dd4bf",
              "#fbbf24"
            ],
            "data": [
              {
                "name": "M1",
                "metricA": 53,
                "metricB": 69
              },
              {
                "name": "M2",
                "metricA": 64,
                "metricB": 60
              },
              {
                "name": "M3",
                "metricA": 82,
                "metricB": 53
              },
              {
                "name": "M4",
                "metricA": 73,
                "metricB": 61
              },
              {
                "name": "M5",
                "metricA": 60,
                "metricB": 49
              },
              {
                "name": "M6",
                "metricA": 75,
                "metricB": 49
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Top Risks/Anomalies",
            "subtext": "Click a bar to focus (Top 10)",
            "badge": "10 items",
            "dataKey": [
              "metricA"
            ],
            "colors": [
              "url(#colorAmber)"
            ],
            "data": [
              {
                "name": "R10",
                "metricA": 97
              },
              {
                "name": "R7",
                "metricA": 85
              },
              {
                "name": "R3",
                "metricA": 61
              },
              {
                "name": "R9",
                "metricA": 56
              },
              {
                "name": "R2",
                "metricA": 50
              },
              {
                "name": "R8",
                "metricA": 35
              },
              {
                "name": "R1",
                "metricA": 14
              },
              {
                "name": "R6",
                "metricA": 14
              },
              {
                "name": "R5",
                "metricA": 3
              },
              {
                "name": "R4",
                "metricA": 1
              }
            ]
          }
        ]
      },
      {
        "name": "Supply chain",
        "charts": []
      },
      {
        "name": "Compliance",
        "charts": []
      }
    ]
  },
  "SportsAndRecreation": {
    "title": "Sports And Recreation Operations",
    "subtitle": "Interactive analytics and key metrics overview.",
    "kpis": [
      {
        "title": "OTIF / YIELD",
        "value": "98%",
        "change": "+0.6%",
        "subtext": "vs last mo",
        "icon": "Activity",
        "color": "emerald"
      },
      {
        "title": "LEAD TIME",
        "value": "29d",
        "change": "-1.1%",
        "subtext": "vs last mo",
        "icon": "Box",
        "color": "amber"
      },
      {
        "title": "COMPLIANCE",
        "value": "92%",
        "change": "+0.6%",
        "subtext": "vs audit",
        "icon": "ShieldCheck",
        "color": "emerald"
      },
      {
        "title": "UPTIME",
        "value": "92%",
        "change": "+0.7%",
        "subtext": "vs last mo",
        "icon": "Database",
        "color": "emerald"
      }
    ],
    "tabs": [
      {
        "name": "Overview",
        "charts": [
          {
            "type": "LineChart",
            "title": "Performance Trends",
            "subtext": "Core metrics over the last 6 months",
            "badge": "Live view",
            "dataKey": [
              "metricA",
              "metricB"
            ],
            "colors": [
              "#2dd4bf",
              "#fbbf24"
            ],
            "data": [
              {
                "name": "M1",
                "metricA": 52,
                "metricB": 30
              },
              {
                "name": "M2",
                "metricA": 67,
                "metricB": 50
              },
              {
                "name": "M3",
                "metricA": 73,
                "metricB": 72
              },
              {
                "name": "M4",
                "metricA": 61,
                "metricB": 43
              },
              {
                "name": "M5",
                "metricA": 80,
                "metricB": 72
              },
              {
                "name": "M6",
                "metricA": 96,
                "metricB": 73
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Top Risks/Anomalies",
            "subtext": "Click a bar to focus (Top 10)",
            "badge": "10 items",
            "dataKey": [
              "metricA"
            ],
            "colors": [
              "url(#colorAmber)"
            ],
            "data": [
              {
                "name": "R4",
                "metricA": 99
              },
              {
                "name": "R6",
                "metricA": 98
              },
              {
                "name": "R7",
                "metricA": 93
              },
              {
                "name": "R5",
                "metricA": 84
              },
              {
                "name": "R8",
                "metricA": 46
              },
              {
                "name": "R10",
                "metricA": 44
              },
              {
                "name": "R3",
                "metricA": 36
              },
              {
                "name": "R1",
                "metricA": 23
              },
              {
                "name": "R2",
                "metricA": 7
              },
              {
                "name": "R9",
                "metricA": 1
              }
            ]
          }
        ]
      },
      {
        "name": "Supply chain",
        "charts": []
      },
      {
        "name": "Compliance",
        "charts": []
      }
    ]
  },
  "Technology": {
    "title": "Technology Operations",
    "subtitle": "Interactive analytics and key metrics overview.",
    "kpis": [
      {
        "title": "OTIF / YIELD",
        "value": "98%",
        "change": "+1.0%",
        "subtext": "vs last mo",
        "icon": "Activity",
        "color": "emerald"
      },
      {
        "title": "LEAD TIME",
        "value": "38d",
        "change": "-0.5%",
        "subtext": "vs last mo",
        "icon": "Box",
        "color": "amber"
      },
      {
        "title": "COMPLIANCE",
        "value": "91%",
        "change": "+0.6%",
        "subtext": "vs audit",
        "icon": "ShieldCheck",
        "color": "emerald"
      },
      {
        "title": "UPTIME",
        "value": "97%",
        "change": "+0.7%",
        "subtext": "vs last mo",
        "icon": "Database",
        "color": "emerald"
      }
    ],
    "tabs": [
      {
        "name": "Overview",
        "charts": [
          {
            "type": "LineChart",
            "title": "Performance Trends",
            "subtext": "Core metrics over the last 6 months",
            "badge": "Live view",
            "dataKey": [
              "metricA",
              "metricB"
            ],
            "colors": [
              "#2dd4bf",
              "#fbbf24"
            ],
            "data": [
              {
                "name": "M1",
                "metricA": 56,
                "metricB": 36
              },
              {
                "name": "M2",
                "metricA": 56,
                "metricB": 48
              },
              {
                "name": "M3",
                "metricA": 98,
                "metricB": 34
              },
              {
                "name": "M4",
                "metricA": 83,
                "metricB": 71
              },
              {
                "name": "M5",
                "metricA": 55,
                "metricB": 30
              },
              {
                "name": "M6",
                "metricA": 81,
                "metricB": 38
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Top Risks/Anomalies",
            "subtext": "Click a bar to focus (Top 10)",
            "badge": "10 items",
            "dataKey": [
              "metricA"
            ],
            "colors": [
              "url(#colorAmber)"
            ],
            "data": [
              {
                "name": "R5",
                "metricA": 95
              },
              {
                "name": "R8",
                "metricA": 86
              },
              {
                "name": "R10",
                "metricA": 78
              },
              {
                "name": "R4",
                "metricA": 73
              },
              {
                "name": "R2",
                "metricA": 46
              },
              {
                "name": "R7",
                "metricA": 43
              },
              {
                "name": "R6",
                "metricA": 35
              },
              {
                "name": "R9",
                "metricA": 34
              },
              {
                "name": "R1",
                "metricA": 29
              },
              {
                "name": "R3",
                "metricA": 19
              }
            ]
          }
        ]
      },
      {
        "name": "Supply chain",
        "charts": []
      },
      {
        "name": "Compliance",
        "charts": []
      }
    ]
  },
  "Telecommunications": {
    "title": "Telecommunications Operations",
    "subtitle": "Interactive analytics and key metrics overview.",
    "kpis": [
      {
        "title": "OTIF / YIELD",
        "value": "98%",
        "change": "+1.1%",
        "subtext": "vs last mo",
        "icon": "Activity",
        "color": "emerald"
      },
      {
        "title": "LEAD TIME",
        "value": "20d",
        "change": "-0.8%",
        "subtext": "vs last mo",
        "icon": "Box",
        "color": "amber"
      },
      {
        "title": "COMPLIANCE",
        "value": "99%",
        "change": "+0.2%",
        "subtext": "vs audit",
        "icon": "ShieldCheck",
        "color": "emerald"
      },
      {
        "title": "UPTIME",
        "value": "95%",
        "change": "+1.0%",
        "subtext": "vs last mo",
        "icon": "Database",
        "color": "emerald"
      }
    ],
    "tabs": [
      {
        "name": "Overview",
        "charts": [
          {
            "type": "LineChart",
            "title": "Performance Trends",
            "subtext": "Core metrics over the last 6 months",
            "badge": "Live view",
            "dataKey": [
              "metricA",
              "metricB"
            ],
            "colors": [
              "#2dd4bf",
              "#fbbf24"
            ],
            "data": [
              {
                "name": "M1",
                "metricA": 54,
                "metricB": 35
              },
              {
                "name": "M2",
                "metricA": 57,
                "metricB": 57
              },
              {
                "name": "M3",
                "metricA": 91,
                "metricB": 69
              },
              {
                "name": "M4",
                "metricA": 94,
                "metricB": 60
              },
              {
                "name": "M5",
                "metricA": 86,
                "metricB": 65
              },
              {
                "name": "M6",
                "metricA": 74,
                "metricB": 51
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Top Risks/Anomalies",
            "subtext": "Click a bar to focus (Top 10)",
            "badge": "10 items",
            "dataKey": [
              "metricA"
            ],
            "colors": [
              "url(#colorAmber)"
            ],
            "data": [
              {
                "name": "R7",
                "metricA": 92
              },
              {
                "name": "R2",
                "metricA": 84
              },
              {
                "name": "R4",
                "metricA": 77
              },
              {
                "name": "R6",
                "metricA": 75
              },
              {
                "name": "R5",
                "metricA": 67
              },
              {
                "name": "R10",
                "metricA": 67
              },
              {
                "name": "R8",
                "metricA": 34
              },
              {
                "name": "R1",
                "metricA": 28
              },
              {
                "name": "R3",
                "metricA": 18
              },
              {
                "name": "R9",
                "metricA": 12
              }
            ]
          }
        ]
      },
      {
        "name": "Supply chain",
        "charts": []
      },
      {
        "name": "Compliance",
        "charts": []
      }
    ]
  },
  "Transportation": {
    "title": "Transportation Operations",
    "subtitle": "Interactive analytics and key metrics overview.",
    "kpis": [
      {
        "title": "OTIF / YIELD",
        "value": "92%",
        "change": "+2.7%",
        "subtext": "vs last mo",
        "icon": "Activity",
        "color": "emerald"
      },
      {
        "title": "LEAD TIME",
        "value": "56d",
        "change": "-1.0%",
        "subtext": "vs last mo",
        "icon": "Box",
        "color": "amber"
      },
      {
        "title": "COMPLIANCE",
        "value": "94%",
        "change": "+0.4%",
        "subtext": "vs audit",
        "icon": "ShieldCheck",
        "color": "emerald"
      },
      {
        "title": "UPTIME",
        "value": "90%",
        "change": "+0.3%",
        "subtext": "vs last mo",
        "icon": "Database",
        "color": "emerald"
      }
    ],
    "tabs": [
      {
        "name": "Overview",
        "charts": [
          {
            "type": "LineChart",
            "title": "Performance Trends",
            "subtext": "Core metrics over the last 6 months",
            "badge": "Live view",
            "dataKey": [
              "metricA",
              "metricB"
            ],
            "colors": [
              "#2dd4bf",
              "#fbbf24"
            ],
            "data": [
              {
                "name": "M1",
                "metricA": 75,
                "metricB": 51
              },
              {
                "name": "M2",
                "metricA": 76,
                "metricB": 30
              },
              {
                "name": "M3",
                "metricA": 98,
                "metricB": 56
              },
              {
                "name": "M4",
                "metricA": 71,
                "metricB": 67
              },
              {
                "name": "M5",
                "metricA": 69,
                "metricB": 55
              },
              {
                "name": "M6",
                "metricA": 77,
                "metricB": 66
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Top Risks/Anomalies",
            "subtext": "Click a bar to focus (Top 10)",
            "badge": "10 items",
            "dataKey": [
              "metricA"
            ],
            "colors": [
              "url(#colorAmber)"
            ],
            "data": [
              {
                "name": "R1",
                "metricA": 96
              },
              {
                "name": "R6",
                "metricA": 79
              },
              {
                "name": "R9",
                "metricA": 79
              },
              {
                "name": "R5",
                "metricA": 77
              },
              {
                "name": "R2",
                "metricA": 66
              },
              {
                "name": "R8",
                "metricA": 66
              },
              {
                "name": "R4",
                "metricA": 35
              },
              {
                "name": "R3",
                "metricA": 33
              },
              {
                "name": "R10",
                "metricA": 21
              },
              {
                "name": "R7",
                "metricA": 18
              }
            ]
          }
        ]
      },
      {
        "name": "Supply chain",
        "charts": []
      },
      {
        "name": "Compliance",
        "charts": []
      }
    ]
  },
  "TravelAndTourism": {
    "title": "Travel And Tourism Operations",
    "subtitle": "Interactive analytics and key metrics overview.",
    "kpis": [
      {
        "title": "OTIF / YIELD",
        "value": "89%",
        "change": "+1.4%",
        "subtext": "vs last mo",
        "icon": "Activity",
        "color": "emerald"
      },
      {
        "title": "LEAD TIME",
        "value": "40d",
        "change": "-2.0%",
        "subtext": "vs last mo",
        "icon": "Box",
        "color": "amber"
      },
      {
        "title": "COMPLIANCE",
        "value": "86%",
        "change": "+1.7%",
        "subtext": "vs audit",
        "icon": "ShieldCheck",
        "color": "emerald"
      },
      {
        "title": "UPTIME",
        "value": "97%",
        "change": "+0.0%",
        "subtext": "vs last mo",
        "icon": "Database",
        "color": "emerald"
      }
    ],
    "tabs": [
      {
        "name": "Overview",
        "charts": [
          {
            "type": "LineChart",
            "title": "Performance Trends",
            "subtext": "Core metrics over the last 6 months",
            "badge": "Live view",
            "dataKey": [
              "metricA",
              "metricB"
            ],
            "colors": [
              "#2dd4bf",
              "#fbbf24"
            ],
            "data": [
              {
                "name": "M1",
                "metricA": 79,
                "metricB": 75
              },
              {
                "name": "M2",
                "metricA": 76,
                "metricB": 79
              },
              {
                "name": "M3",
                "metricA": 75,
                "metricB": 76
              },
              {
                "name": "M4",
                "metricA": 94,
                "metricB": 63
              },
              {
                "name": "M5",
                "metricA": 87,
                "metricB": 42
              },
              {
                "name": "M6",
                "metricA": 91,
                "metricB": 66
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Top Risks/Anomalies",
            "subtext": "Click a bar to focus (Top 10)",
            "badge": "10 items",
            "dataKey": [
              "metricA"
            ],
            "colors": [
              "url(#colorAmber)"
            ],
            "data": [
              {
                "name": "R3",
                "metricA": 98
              },
              {
                "name": "R8",
                "metricA": 85
              },
              {
                "name": "R10",
                "metricA": 60
              },
              {
                "name": "R5",
                "metricA": 56
              },
              {
                "name": "R1",
                "metricA": 50
              },
              {
                "name": "R2",
                "metricA": 44
              },
              {
                "name": "R6",
                "metricA": 39
              },
              {
                "name": "R9",
                "metricA": 32
              },
              {
                "name": "R7",
                "metricA": 12
              },
              {
                "name": "R4",
                "metricA": 1
              }
            ]
          }
        ]
      },
      {
        "name": "Supply chain",
        "charts": []
      },
      {
        "name": "Compliance",
        "charts": []
      }
    ]
  }
};