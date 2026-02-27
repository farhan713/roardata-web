export const mockDashboardsData: Record<string, any> = {
  "AerospaceAndDefence": {
    "title": "Aerospace & Defence Operations",
    "subtitle": "Supply chain, compliance, R&D, security, assets and workforce - with interactive filters and drill-down.",
    "theme": "cyan",
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
                "name": "M1",
                "otif": 25,
                "leadTime": 79,
                "inventory": 69
              },
              {
                "name": "M2",
                "otif": 74,
                "leadTime": 47,
                "inventory": 82
              },
              {
                "name": "M3",
                "otif": 44,
                "leadTime": 73,
                "inventory": 76
              },
              {
                "name": "M4",
                "otif": 79,
                "leadTime": 60,
                "inventory": 59
              },
              {
                "name": "M5",
                "otif": 56,
                "leadTime": 91,
                "inventory": 58
              },
              {
                "name": "M6",
                "otif": 79,
                "leadTime": 61,
                "inventory": 94
              },
              {
                "name": "M7",
                "otif": 29,
                "leadTime": 44,
                "inventory": 91
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Top supplier risks",
            "subtext": "Click a bar to focus",
            "badge": "Live view",
            "dataKey": [
              "risk"
            ],
            "colors": [
              "url(#colorAmber)"
            ],
            "data": [
              {
                "name": "M1",
                "risk": 54
              },
              {
                "name": "M2",
                "risk": 75
              },
              {
                "name": "M3",
                "risk": 43
              },
              {
                "name": "M4",
                "risk": 41
              },
              {
                "name": "M5",
                "risk": 43
              },
              {
                "name": "M6",
                "risk": 49
              },
              {
                "name": "M7",
                "risk": 25
              }
            ]
          }
        ]
      },
      {
        "name": "Supply chain",
        "charts": [
          {
            "type": "AreaChart",
            "title": "Logistics Flow",
            "subtext": "Global shipping volume",
            "badge": "Live view",
            "dataKey": [
              "volume"
            ],
            "colors": [
              "#38bdf8"
            ],
            "data": [
              {
                "name": "M1",
                "volume": 51
              },
              {
                "name": "M2",
                "volume": 38
              },
              {
                "name": "M3",
                "volume": 56
              },
              {
                "name": "M4",
                "volume": 25
              },
              {
                "name": "M5",
                "volume": 21
              },
              {
                "name": "M6",
                "volume": 50
              },
              {
                "name": "M7",
                "volume": 20
              }
            ]
          }
        ]
      },
      {
        "name": "Compliance",
        "charts": [
          {
            "type": "LineChart",
            "title": "Regulatory Checks",
            "subtext": "Daily audit pass rates",
            "badge": "Live view",
            "dataKey": [
              "passRate"
            ],
            "colors": [
              "#34d399"
            ],
            "data": [
              {
                "name": "M1",
                "passRate": 48
              },
              {
                "name": "M2",
                "passRate": 79
              },
              {
                "name": "M3",
                "passRate": 56
              },
              {
                "name": "M4",
                "passRate": 76
              },
              {
                "name": "M5",
                "passRate": 55
              },
              {
                "name": "M6",
                "passRate": 46
              },
              {
                "name": "M7",
                "passRate": 57
              }
            ]
          }
        ]
      },
      {
        "name": "R&D",
        "charts": [
          {
            "type": "BarChart",
            "title": "Development Velocity",
            "subtext": "Story points per sprint",
            "badge": "Live view",
            "dataKey": [
              "velocity"
            ],
            "colors": [
              "url(#colorEmerald)"
            ],
            "data": [
              {
                "name": "M1",
                "velocity": 39
              },
              {
                "name": "M2",
                "velocity": 46
              },
              {
                "name": "M3",
                "velocity": 63
              },
              {
                "name": "M4",
                "velocity": 25
              },
              {
                "name": "M5",
                "velocity": 61
              },
              {
                "name": "M6",
                "velocity": 32
              },
              {
                "name": "M7",
                "velocity": 50
              }
            ]
          }
        ]
      }
    ]
  },
  "Agriculture": {
    "title": "Agriculture Operations",
    "subtitle": "Real-time crop monitoring, resource management, and machinery telemetry.",
    "theme": "emerald",
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
            "badge": "Live view",
            "dataKey": [
              "yield",
              "water"
            ],
            "colors": [
              "#34d399",
              "#60a5fa"
            ],
            "data": [
              {
                "name": "M1",
                "yield": 84,
                "water": 81
              },
              {
                "name": "M2",
                "yield": 20,
                "water": 81
              },
              {
                "name": "M3",
                "yield": 43,
                "water": 48
              },
              {
                "name": "M4",
                "yield": 79,
                "water": 77
              },
              {
                "name": "M5",
                "yield": 77,
                "water": 68
              },
              {
                "name": "M6",
                "yield": 81,
                "water": 73
              },
              {
                "name": "M7",
                "yield": 71,
                "water": 61
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Field Health Status",
            "subtext": "Soil moisture and overall crop health",
            "badge": "Live view",
            "dataKey": [
              "health"
            ],
            "colors": [
              "url(#colorEmerald)"
            ],
            "data": [
              {
                "name": "M1",
                "health": 79
              },
              {
                "name": "M2",
                "health": 94
              },
              {
                "name": "M3",
                "health": 76
              },
              {
                "name": "M4",
                "health": 26
              },
              {
                "name": "M5",
                "health": 35
              },
              {
                "name": "M6",
                "health": 84
              },
              {
                "name": "M7",
                "health": 85
              }
            ]
          }
        ]
      },
      {
        "name": "Fields & Crops",
        "charts": [
          {
            "type": "AreaChart",
            "title": "Crop Growth Rate",
            "subtext": "Daily biomass estimation",
            "badge": "Live view",
            "dataKey": [
              "growth"
            ],
            "colors": [
              "#a3e635"
            ],
            "data": [
              {
                "name": "M1",
                "growth": 27
              },
              {
                "name": "M2",
                "growth": 89
              },
              {
                "name": "M3",
                "growth": 62
              },
              {
                "name": "M4",
                "growth": 48
              },
              {
                "name": "M5",
                "growth": 106
              },
              {
                "name": "M6",
                "growth": 66
              },
              {
                "name": "M7",
                "growth": 92
              }
            ]
          }
        ]
      },
      {
        "name": "Machinery",
        "charts": [
          {
            "type": "LineChart",
            "title": "Fuel Consumption",
            "subtext": "Fleet wide metric",
            "badge": "Live view",
            "dataKey": [
              "fuel"
            ],
            "colors": [
              "#f87171"
            ],
            "data": [
              {
                "name": "M1",
                "fuel": 55
              },
              {
                "name": "M2",
                "fuel": 40
              },
              {
                "name": "M3",
                "fuel": 49
              },
              {
                "name": "M4",
                "fuel": 95
              },
              {
                "name": "M5",
                "fuel": 76
              },
              {
                "name": "M6",
                "fuel": 64
              },
              {
                "name": "M7",
                "fuel": 52
              }
            ]
          }
        ]
      }
    ]
  },
  "Automotive": {
    "title": "Automotive Operations",
    "subtitle": "Interactive analytics and key metrics overview.",
    "theme": "rose",
    "kpis": [
      {
        "title": "PROCESSING",
        "value": "47k/hr",
        "change": "+0.9%",
        "subtext": "vs last mo",
        "icon": "ShieldCheck",
        "color": "emerald"
      },
      {
        "title": "RISK SCORE",
        "value": "4/100",
        "change": "-2.0%",
        "subtext": "vs last wk",
        "icon": "Database",
        "color": "amber"
      },
      {
        "title": "SYSTEM LOAD",
        "value": "77%",
        "change": "+0.9%",
        "subtext": "vs target",
        "icon": "Truck",
        "color": "rose"
      },
      {
        "title": "THROUGHPUT",
        "value": "314 MB/s",
        "change": "+0.9%",
        "subtext": "yoy",
        "icon": "Wrench",
        "color": "rose"
      }
    ],
    "tabs": [
      {
        "name": "Operations",
        "charts": [
          {
            "type": "LineChart",
            "title": "Automotive Performance",
            "subtext": "Core metrics tracking",
            "badge": "Live view",
            "dataKey": [
              "primary",
              "secondary"
            ],
            "colors": [
              "#2dd4bf",
              "#fbbf24"
            ],
            "data": [
              {
                "name": "M1",
                "primary": 104,
                "secondary": 46
              },
              {
                "name": "M2",
                "primary": 58,
                "secondary": 31
              },
              {
                "name": "M3",
                "primary": 22,
                "secondary": 34
              },
              {
                "name": "M4",
                "primary": 31,
                "secondary": 108
              },
              {
                "name": "M5",
                "primary": 45,
                "secondary": 46
              },
              {
                "name": "M6",
                "primary": 69,
                "secondary": 64
              },
              {
                "name": "M7",
                "primary": 38,
                "secondary": 78
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Regional Distribution",
            "subtext": "Click a bar to focus (Top 7)",
            "badge": "Live view",
            "dataKey": [
              "volume"
            ],
            "colors": [
              "url(#colorEmerald)"
            ],
            "data": [
              {
                "name": "M1",
                "volume": 51
              },
              {
                "name": "M2",
                "volume": 58
              },
              {
                "name": "M3",
                "volume": 47
              },
              {
                "name": "M4",
                "volume": 43
              },
              {
                "name": "M5",
                "volume": 47
              },
              {
                "name": "M6",
                "volume": 28
              },
              {
                "name": "M7",
                "volume": 62
              }
            ]
          }
        ]
      },
      {
        "name": "Insights",
        "charts": [
          {
            "type": "AreaChart",
            "title": "Resource Utilization",
            "subtext": "Daily volume processed",
            "badge": "Live view",
            "dataKey": [
              "active"
            ],
            "colors": [
              "#818cf8"
            ],
            "data": [
              {
                "name": "M1",
                "active": 75
              },
              {
                "name": "M2",
                "active": 97
              },
              {
                "name": "M3",
                "active": 101
              },
              {
                "name": "M4",
                "active": 68
              },
              {
                "name": "M5",
                "active": 27
              },
              {
                "name": "M6",
                "active": 76
              },
              {
                "name": "M7",
                "active": 92
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Bottlenecks",
            "subtext": "SLA breaches and delays",
            "badge": "Live view",
            "dataKey": [
              "delays"
            ],
            "colors": [
              "url(#colorAmber)"
            ],
            "data": [
              {
                "name": "M1",
                "delays": 24
              },
              {
                "name": "M2",
                "delays": 59
              },
              {
                "name": "M3",
                "delays": 69
              },
              {
                "name": "M4",
                "delays": 76
              },
              {
                "name": "M5",
                "delays": 32
              },
              {
                "name": "M6",
                "delays": 47
              },
              {
                "name": "M7",
                "delays": 87
              }
            ]
          }
        ]
      },
      {
        "name": "Reports",
        "charts": [
          {
            "type": "LineChart",
            "title": "Quality Scores",
            "subtext": "Rolling compliance rate",
            "badge": "Live view",
            "dataKey": [
              "score"
            ],
            "colors": [
              "#34d399"
            ],
            "data": [
              {
                "name": "M1",
                "score": 64
              },
              {
                "name": "M2",
                "score": 94
              },
              {
                "name": "M3",
                "score": 58
              },
              {
                "name": "M4",
                "score": 64
              },
              {
                "name": "M5",
                "score": 25
              },
              {
                "name": "M6",
                "score": 85
              },
              {
                "name": "M7",
                "score": 39
              }
            ]
          },
          {
            "type": "AreaChart",
            "title": "Incident Reports",
            "subtext": "Monthly reported anomalies",
            "badge": "Live view",
            "dataKey": [
              "incidents"
            ],
            "colors": [
              "#f43f5e"
            ],
            "data": [
              {
                "name": "M1",
                "incidents": 63
              },
              {
                "name": "M2",
                "incidents": 30
              },
              {
                "name": "M3",
                "incidents": 26
              },
              {
                "name": "M4",
                "incidents": 41
              },
              {
                "name": "M5",
                "incidents": 44
              },
              {
                "name": "M6",
                "incidents": 52
              },
              {
                "name": "M7",
                "incidents": 106
              }
            ]
          }
        ]
      }
    ]
  },
  "Banking": {
    "title": "Banking Operations",
    "subtitle": "Interactive analytics and key metrics overview.",
    "theme": "indigo",
    "kpis": [
      {
        "title": "THROUGHPUT",
        "value": "615 MB/s",
        "change": "+1.4%",
        "subtext": "vs last mo",
        "icon": "ShieldCheck",
        "color": "indigo"
      },
      {
        "title": "UPTIME",
        "value": "99.82%",
        "change": "-1.9%",
        "subtext": "vs last wk",
        "icon": "Database",
        "color": "cyan"
      },
      {
        "title": "EFFICIENCY",
        "value": "77%",
        "change": "+0.3%",
        "subtext": "vs target",
        "icon": "Truck",
        "color": "indigo"
      },
      {
        "title": "PROCESSING",
        "value": "12k/hr",
        "change": "+0.4%",
        "subtext": "yoy",
        "icon": "Wrench",
        "color": "emerald"
      }
    ],
    "tabs": [
      {
        "name": "Operations",
        "charts": [
          {
            "type": "LineChart",
            "title": "Banking Performance",
            "subtext": "Core metrics tracking",
            "badge": "Live view",
            "dataKey": [
              "primary",
              "secondary"
            ],
            "colors": [
              "#2dd4bf",
              "#fbbf24"
            ],
            "data": [
              {
                "name": "M1",
                "primary": 85,
                "secondary": 72
              },
              {
                "name": "M2",
                "primary": 75,
                "secondary": 60
              },
              {
                "name": "M3",
                "primary": 65,
                "secondary": 107
              },
              {
                "name": "M4",
                "primary": 32,
                "secondary": 85
              },
              {
                "name": "M5",
                "primary": 35,
                "secondary": 48
              },
              {
                "name": "M6",
                "primary": 71,
                "secondary": 98
              },
              {
                "name": "M7",
                "primary": 64,
                "secondary": 30
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Regional Distribution",
            "subtext": "Click a bar to focus (Top 7)",
            "badge": "Live view",
            "dataKey": [
              "volume"
            ],
            "colors": [
              "url(#colorEmerald)"
            ],
            "data": [
              {
                "name": "M1",
                "volume": 22
              },
              {
                "name": "M2",
                "volume": 72
              },
              {
                "name": "M3",
                "volume": 63
              },
              {
                "name": "M4",
                "volume": 54
              },
              {
                "name": "M5",
                "volume": 65
              },
              {
                "name": "M6",
                "volume": 76
              },
              {
                "name": "M7",
                "volume": 42
              }
            ]
          }
        ]
      },
      {
        "name": "Insights",
        "charts": [
          {
            "type": "AreaChart",
            "title": "Resource Utilization",
            "subtext": "Daily volume processed",
            "badge": "Live view",
            "dataKey": [
              "active"
            ],
            "colors": [
              "#818cf8"
            ],
            "data": [
              {
                "name": "M1",
                "active": 71
              },
              {
                "name": "M2",
                "active": 96
              },
              {
                "name": "M3",
                "active": 37
              },
              {
                "name": "M4",
                "active": 24
              },
              {
                "name": "M5",
                "active": 83
              },
              {
                "name": "M6",
                "active": 42
              },
              {
                "name": "M7",
                "active": 74
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Bottlenecks",
            "subtext": "SLA breaches and delays",
            "badge": "Live view",
            "dataKey": [
              "delays"
            ],
            "colors": [
              "url(#colorAmber)"
            ],
            "data": [
              {
                "name": "M1",
                "delays": 45
              },
              {
                "name": "M2",
                "delays": 20
              },
              {
                "name": "M3",
                "delays": 49
              },
              {
                "name": "M4",
                "delays": 54
              },
              {
                "name": "M5",
                "delays": 37
              },
              {
                "name": "M6",
                "delays": 28
              },
              {
                "name": "M7",
                "delays": 45
              }
            ]
          }
        ]
      },
      {
        "name": "Reports",
        "charts": [
          {
            "type": "LineChart",
            "title": "Quality Scores",
            "subtext": "Rolling compliance rate",
            "badge": "Live view",
            "dataKey": [
              "score"
            ],
            "colors": [
              "#34d399"
            ],
            "data": [
              {
                "name": "M1",
                "score": 84
              },
              {
                "name": "M2",
                "score": 39
              },
              {
                "name": "M3",
                "score": 37
              },
              {
                "name": "M4",
                "score": 54
              },
              {
                "name": "M5",
                "score": 54
              },
              {
                "name": "M6",
                "score": 51
              },
              {
                "name": "M7",
                "score": 26
              }
            ]
          },
          {
            "type": "AreaChart",
            "title": "Incident Reports",
            "subtext": "Monthly reported anomalies",
            "badge": "Live view",
            "dataKey": [
              "incidents"
            ],
            "colors": [
              "#f43f5e"
            ],
            "data": [
              {
                "name": "M1",
                "incidents": 79
              },
              {
                "name": "M2",
                "incidents": 82
              },
              {
                "name": "M3",
                "incidents": 76
              },
              {
                "name": "M4",
                "incidents": 85
              },
              {
                "name": "M5",
                "incidents": 66
              },
              {
                "name": "M6",
                "incidents": 20
              },
              {
                "name": "M7",
                "incidents": 85
              }
            ]
          }
        ]
      }
    ]
  },
  "Construction": {
    "title": "Construction Operations",
    "subtitle": "Interactive analytics and key metrics overview.",
    "theme": "cyan",
    "kpis": [
      {
        "title": "UPTIME",
        "value": "99.23%",
        "change": "+2.5%",
        "subtext": "vs last mo",
        "icon": "Truck",
        "color": "cyan"
      },
      {
        "title": "EFFICIENCY",
        "value": "78%",
        "change": "-2.9%",
        "subtext": "vs last wk",
        "icon": "Wrench",
        "color": "cyan"
      },
      {
        "title": "PROCESSING",
        "value": "33k/hr",
        "change": "+1.7%",
        "subtext": "vs target",
        "icon": "Activity",
        "color": "emerald"
      },
      {
        "title": "RISK SCORE",
        "value": "14/100",
        "change": "+0.4%",
        "subtext": "yoy",
        "icon": "Box",
        "color": "amber"
      }
    ],
    "tabs": [
      {
        "name": "Insights",
        "charts": [
          {
            "type": "LineChart",
            "title": "Construction Performance",
            "subtext": "Core metrics tracking",
            "badge": "Live view",
            "dataKey": [
              "primary",
              "secondary"
            ],
            "colors": [
              "#2dd4bf",
              "#fbbf24"
            ],
            "data": [
              {
                "name": "M1",
                "primary": 32,
                "secondary": 97
              },
              {
                "name": "M2",
                "primary": 52,
                "secondary": 70
              },
              {
                "name": "M3",
                "primary": 27,
                "secondary": 98
              },
              {
                "name": "M4",
                "primary": 48,
                "secondary": 57
              },
              {
                "name": "M5",
                "primary": 21,
                "secondary": 80
              },
              {
                "name": "M6",
                "primary": 58,
                "secondary": 30
              },
              {
                "name": "M7",
                "primary": 32,
                "secondary": 57
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Regional Distribution",
            "subtext": "Click a bar to focus (Top 7)",
            "badge": "Live view",
            "dataKey": [
              "volume"
            ],
            "colors": [
              "url(#colorEmerald)"
            ],
            "data": [
              {
                "name": "M1",
                "volume": 43
              },
              {
                "name": "M2",
                "volume": 54
              },
              {
                "name": "M3",
                "volume": 72
              },
              {
                "name": "M4",
                "volume": 82
              },
              {
                "name": "M5",
                "volume": 25
              },
              {
                "name": "M6",
                "volume": 83
              },
              {
                "name": "M7",
                "volume": 36
              }
            ]
          }
        ]
      },
      {
        "name": "Reports",
        "charts": [
          {
            "type": "AreaChart",
            "title": "Resource Utilization",
            "subtext": "Daily volume processed",
            "badge": "Live view",
            "dataKey": [
              "active"
            ],
            "colors": [
              "#818cf8"
            ],
            "data": [
              {
                "name": "M1",
                "active": 65
              },
              {
                "name": "M2",
                "active": 31
              },
              {
                "name": "M3",
                "active": 22
              },
              {
                "name": "M4",
                "active": 31
              },
              {
                "name": "M5",
                "active": 79
              },
              {
                "name": "M6",
                "active": 52
              },
              {
                "name": "M7",
                "active": 43
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Bottlenecks",
            "subtext": "SLA breaches and delays",
            "badge": "Live view",
            "dataKey": [
              "delays"
            ],
            "colors": [
              "url(#colorAmber)"
            ],
            "data": [
              {
                "name": "M1",
                "delays": 78
              },
              {
                "name": "M2",
                "delays": 60
              },
              {
                "name": "M3",
                "delays": 42
              },
              {
                "name": "M4",
                "delays": 81
              },
              {
                "name": "M5",
                "delays": 21
              },
              {
                "name": "M6",
                "delays": 54
              },
              {
                "name": "M7",
                "delays": 62
              }
            ]
          }
        ]
      },
      {
        "name": "Overview",
        "charts": [
          {
            "type": "LineChart",
            "title": "Quality Scores",
            "subtext": "Rolling compliance rate",
            "badge": "Live view",
            "dataKey": [
              "score"
            ],
            "colors": [
              "#34d399"
            ],
            "data": [
              {
                "name": "M1",
                "score": 81
              },
              {
                "name": "M2",
                "score": 65
              },
              {
                "name": "M3",
                "score": 85
              },
              {
                "name": "M4",
                "score": 71
              },
              {
                "name": "M5",
                "score": 76
              },
              {
                "name": "M6",
                "score": 37
              },
              {
                "name": "M7",
                "score": 20
              }
            ]
          },
          {
            "type": "AreaChart",
            "title": "Incident Reports",
            "subtext": "Monthly reported anomalies",
            "badge": "Live view",
            "dataKey": [
              "incidents"
            ],
            "colors": [
              "#f43f5e"
            ],
            "data": [
              {
                "name": "M1",
                "incidents": 83
              },
              {
                "name": "M2",
                "incidents": 77
              },
              {
                "name": "M3",
                "incidents": 35
              },
              {
                "name": "M4",
                "incidents": 89
              },
              {
                "name": "M5",
                "incidents": 66
              },
              {
                "name": "M6",
                "incidents": 64
              },
              {
                "name": "M7",
                "incidents": 44
              }
            ]
          }
        ]
      }
    ]
  },
  "Education": {
    "title": "Education Operations",
    "subtitle": "Interactive analytics and key metrics overview.",
    "theme": "fuchsia",
    "kpis": [
      {
        "title": "THROUGHPUT",
        "value": "732 MB/s",
        "change": "+2.0%",
        "subtext": "vs last mo",
        "icon": "ShieldCheck",
        "color": "fuchsia"
      },
      {
        "title": "UPTIME",
        "value": "99.24%",
        "change": "-1.7%",
        "subtext": "vs last wk",
        "icon": "Database",
        "color": "cyan"
      },
      {
        "title": "EFFICIENCY",
        "value": "79%",
        "change": "+1.0%",
        "subtext": "vs target",
        "icon": "Truck",
        "color": "fuchsia"
      },
      {
        "title": "PROCESSING",
        "value": "34k/hr",
        "change": "+0.6%",
        "subtext": "yoy",
        "icon": "Wrench",
        "color": "emerald"
      }
    ],
    "tabs": [
      {
        "name": "Reports",
        "charts": [
          {
            "type": "LineChart",
            "title": "Education Performance",
            "subtext": "Core metrics tracking",
            "badge": "Live view",
            "dataKey": [
              "primary",
              "secondary"
            ],
            "colors": [
              "#2dd4bf",
              "#fbbf24"
            ],
            "data": [
              {
                "name": "M1",
                "primary": 47,
                "secondary": 87
              },
              {
                "name": "M2",
                "primary": 39,
                "secondary": 91
              },
              {
                "name": "M3",
                "primary": 48,
                "secondary": 79
              },
              {
                "name": "M4",
                "primary": 56,
                "secondary": 37
              },
              {
                "name": "M5",
                "primary": 85,
                "secondary": 87
              },
              {
                "name": "M6",
                "primary": 48,
                "secondary": 60
              },
              {
                "name": "M7",
                "primary": 39,
                "secondary": 33
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Regional Distribution",
            "subtext": "Click a bar to focus (Top 7)",
            "badge": "Live view",
            "dataKey": [
              "volume"
            ],
            "colors": [
              "url(#colorEmerald)"
            ],
            "data": [
              {
                "name": "M1",
                "volume": 84
              },
              {
                "name": "M2",
                "volume": 58
              },
              {
                "name": "M3",
                "volume": 81
              },
              {
                "name": "M4",
                "volume": 59
              },
              {
                "name": "M5",
                "volume": 57
              },
              {
                "name": "M6",
                "volume": 58
              },
              {
                "name": "M7",
                "volume": 66
              }
            ]
          }
        ]
      },
      {
        "name": "Overview",
        "charts": [
          {
            "type": "AreaChart",
            "title": "Resource Utilization",
            "subtext": "Daily volume processed",
            "badge": "Live view",
            "dataKey": [
              "active"
            ],
            "colors": [
              "#818cf8"
            ],
            "data": [
              {
                "name": "M1",
                "active": 85
              },
              {
                "name": "M2",
                "active": 59
              },
              {
                "name": "M3",
                "active": 71
              },
              {
                "name": "M4",
                "active": 63
              },
              {
                "name": "M5",
                "active": 66
              },
              {
                "name": "M6",
                "active": 57
              },
              {
                "name": "M7",
                "active": 31
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Bottlenecks",
            "subtext": "SLA breaches and delays",
            "badge": "Live view",
            "dataKey": [
              "delays"
            ],
            "colors": [
              "url(#colorAmber)"
            ],
            "data": [
              {
                "name": "M1",
                "delays": 63
              },
              {
                "name": "M2",
                "delays": 30
              },
              {
                "name": "M3",
                "delays": 41
              },
              {
                "name": "M4",
                "delays": 69
              },
              {
                "name": "M5",
                "delays": 77
              },
              {
                "name": "M6",
                "delays": 47
              },
              {
                "name": "M7",
                "delays": 29
              }
            ]
          }
        ]
      },
      {
        "name": "Analytics",
        "charts": [
          {
            "type": "LineChart",
            "title": "Quality Scores",
            "subtext": "Rolling compliance rate",
            "badge": "Live view",
            "dataKey": [
              "score"
            ],
            "colors": [
              "#34d399"
            ],
            "data": [
              {
                "name": "M1",
                "score": 45
              },
              {
                "name": "M2",
                "score": 20
              },
              {
                "name": "M3",
                "score": 59
              },
              {
                "name": "M4",
                "score": 58
              },
              {
                "name": "M5",
                "score": 30
              },
              {
                "name": "M6",
                "score": 58
              },
              {
                "name": "M7",
                "score": 87
              }
            ]
          },
          {
            "type": "AreaChart",
            "title": "Incident Reports",
            "subtext": "Monthly reported anomalies",
            "badge": "Live view",
            "dataKey": [
              "incidents"
            ],
            "colors": [
              "#f43f5e"
            ],
            "data": [
              {
                "name": "M1",
                "incidents": 64
              },
              {
                "name": "M2",
                "incidents": 66
              },
              {
                "name": "M3",
                "incidents": 73
              },
              {
                "name": "M4",
                "incidents": 91
              },
              {
                "name": "M5",
                "incidents": 56
              },
              {
                "name": "M6",
                "incidents": 83
              },
              {
                "name": "M7",
                "incidents": 51
              }
            ]
          }
        ]
      }
    ]
  },
  "EnergyAndUtilities": {
    "title": "Energy And Utilities Operations",
    "subtitle": "Interactive analytics and key metrics overview.",
    "theme": "emerald",
    "kpis": [
      {
        "title": "SYSTEM LOAD",
        "value": "49%",
        "change": "+0.1%",
        "subtext": "vs last mo",
        "icon": "Activity",
        "color": "rose"
      },
      {
        "title": "THROUGHPUT",
        "value": "381 MB/s",
        "change": "-0.7%",
        "subtext": "vs last wk",
        "icon": "Box",
        "color": "emerald"
      },
      {
        "title": "UPTIME",
        "value": "99.59%",
        "change": "+1.3%",
        "subtext": "vs target",
        "icon": "ShieldCheck",
        "color": "cyan"
      },
      {
        "title": "EFFICIENCY",
        "value": "94%",
        "change": "+0.4%",
        "subtext": "yoy",
        "icon": "Database",
        "color": "emerald"
      }
    ],
    "tabs": [
      {
        "name": "Reports",
        "charts": [
          {
            "type": "LineChart",
            "title": "EnergyAndUtilities Performance",
            "subtext": "Core metrics tracking",
            "badge": "Live view",
            "dataKey": [
              "primary",
              "secondary"
            ],
            "colors": [
              "#2dd4bf",
              "#fbbf24"
            ],
            "data": [
              {
                "name": "M1",
                "primary": 66,
                "secondary": 75
              },
              {
                "name": "M2",
                "primary": 20,
                "secondary": 33
              },
              {
                "name": "M3",
                "primary": 35,
                "secondary": 53
              },
              {
                "name": "M4",
                "primary": 22,
                "secondary": 58
              },
              {
                "name": "M5",
                "primary": 44,
                "secondary": 33
              },
              {
                "name": "M6",
                "primary": 59,
                "secondary": 60
              },
              {
                "name": "M7",
                "primary": 39,
                "secondary": 41
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Regional Distribution",
            "subtext": "Click a bar to focus (Top 7)",
            "badge": "Live view",
            "dataKey": [
              "volume"
            ],
            "colors": [
              "url(#colorEmerald)"
            ],
            "data": [
              {
                "name": "M1",
                "volume": 73
              },
              {
                "name": "M2",
                "volume": 56
              },
              {
                "name": "M3",
                "volume": 60
              },
              {
                "name": "M4",
                "volume": 68
              },
              {
                "name": "M5",
                "volume": 51
              },
              {
                "name": "M6",
                "volume": 30
              },
              {
                "name": "M7",
                "volume": 42
              }
            ]
          }
        ]
      },
      {
        "name": "Overview",
        "charts": [
          {
            "type": "AreaChart",
            "title": "Resource Utilization",
            "subtext": "Daily volume processed",
            "badge": "Live view",
            "dataKey": [
              "active"
            ],
            "colors": [
              "#818cf8"
            ],
            "data": [
              {
                "name": "M1",
                "active": 63
              },
              {
                "name": "M2",
                "active": 28
              },
              {
                "name": "M3",
                "active": 33
              },
              {
                "name": "M4",
                "active": 21
              },
              {
                "name": "M5",
                "active": 23
              },
              {
                "name": "M6",
                "active": 74
              },
              {
                "name": "M7",
                "active": 50
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Bottlenecks",
            "subtext": "SLA breaches and delays",
            "badge": "Live view",
            "dataKey": [
              "delays"
            ],
            "colors": [
              "url(#colorAmber)"
            ],
            "data": [
              {
                "name": "M1",
                "delays": 50
              },
              {
                "name": "M2",
                "delays": 53
              },
              {
                "name": "M3",
                "delays": 27
              },
              {
                "name": "M4",
                "delays": 35
              },
              {
                "name": "M5",
                "delays": 72
              },
              {
                "name": "M6",
                "delays": 77
              },
              {
                "name": "M7",
                "delays": 68
              }
            ]
          }
        ]
      },
      {
        "name": "Analytics",
        "charts": [
          {
            "type": "LineChart",
            "title": "Quality Scores",
            "subtext": "Rolling compliance rate",
            "badge": "Live view",
            "dataKey": [
              "score"
            ],
            "colors": [
              "#34d399"
            ],
            "data": [
              {
                "name": "M1",
                "score": 66
              },
              {
                "name": "M2",
                "score": 28
              },
              {
                "name": "M3",
                "score": 78
              },
              {
                "name": "M4",
                "score": 35
              },
              {
                "name": "M5",
                "score": 78
              },
              {
                "name": "M6",
                "score": 68
              },
              {
                "name": "M7",
                "score": 33
              }
            ]
          },
          {
            "type": "AreaChart",
            "title": "Incident Reports",
            "subtext": "Monthly reported anomalies",
            "badge": "Live view",
            "dataKey": [
              "incidents"
            ],
            "colors": [
              "#f43f5e"
            ],
            "data": [
              {
                "name": "M1",
                "incidents": 62
              },
              {
                "name": "M2",
                "incidents": 66
              },
              {
                "name": "M3",
                "incidents": 49
              },
              {
                "name": "M4",
                "incidents": 41
              },
              {
                "name": "M5",
                "incidents": 52
              },
              {
                "name": "M6",
                "incidents": 56
              },
              {
                "name": "M7",
                "incidents": 51
              }
            ]
          }
        ]
      }
    ]
  },
  "EventManagement": {
    "title": "Event Management Operations",
    "subtitle": "Interactive analytics and key metrics overview.",
    "theme": "amber",
    "kpis": [
      {
        "title": "SYSTEM LOAD",
        "value": "57%",
        "change": "+2.4%",
        "subtext": "vs last mo",
        "icon": "Activity",
        "color": "rose"
      },
      {
        "title": "THROUGHPUT",
        "value": "418 MB/s",
        "change": "-1.7%",
        "subtext": "vs last wk",
        "icon": "Box",
        "color": "amber"
      },
      {
        "title": "UPTIME",
        "value": "99.17%",
        "change": "+0.8%",
        "subtext": "vs target",
        "icon": "ShieldCheck",
        "color": "cyan"
      },
      {
        "title": "EFFICIENCY",
        "value": "92%",
        "change": "+0.4%",
        "subtext": "yoy",
        "icon": "Database",
        "color": "amber"
      }
    ],
    "tabs": [
      {
        "name": "Operations",
        "charts": [
          {
            "type": "LineChart",
            "title": "EventManagement Performance",
            "subtext": "Core metrics tracking",
            "badge": "Live view",
            "dataKey": [
              "primary",
              "secondary"
            ],
            "colors": [
              "#2dd4bf",
              "#fbbf24"
            ],
            "data": [
              {
                "name": "M1",
                "primary": 72,
                "secondary": 76
              },
              {
                "name": "M2",
                "primary": 77,
                "secondary": 44
              },
              {
                "name": "M3",
                "primary": 41,
                "secondary": 46
              },
              {
                "name": "M4",
                "primary": 40,
                "secondary": 54
              },
              {
                "name": "M5",
                "primary": 80,
                "secondary": 39
              },
              {
                "name": "M6",
                "primary": 25,
                "secondary": 61
              },
              {
                "name": "M7",
                "primary": 65,
                "secondary": 32
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Regional Distribution",
            "subtext": "Click a bar to focus (Top 7)",
            "badge": "Live view",
            "dataKey": [
              "volume"
            ],
            "colors": [
              "url(#colorEmerald)"
            ],
            "data": [
              {
                "name": "M1",
                "volume": 72
              },
              {
                "name": "M2",
                "volume": 59
              },
              {
                "name": "M3",
                "volume": 29
              },
              {
                "name": "M4",
                "volume": 73
              },
              {
                "name": "M5",
                "volume": 41
              },
              {
                "name": "M6",
                "volume": 37
              },
              {
                "name": "M7",
                "volume": 40
              }
            ]
          }
        ]
      },
      {
        "name": "Insights",
        "charts": [
          {
            "type": "AreaChart",
            "title": "Resource Utilization",
            "subtext": "Daily volume processed",
            "badge": "Live view",
            "dataKey": [
              "active"
            ],
            "colors": [
              "#818cf8"
            ],
            "data": [
              {
                "name": "M1",
                "active": 66
              },
              {
                "name": "M2",
                "active": 28
              },
              {
                "name": "M3",
                "active": 80
              },
              {
                "name": "M4",
                "active": 41
              },
              {
                "name": "M5",
                "active": 82
              },
              {
                "name": "M6",
                "active": 44
              },
              {
                "name": "M7",
                "active": 22
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Bottlenecks",
            "subtext": "SLA breaches and delays",
            "badge": "Live view",
            "dataKey": [
              "delays"
            ],
            "colors": [
              "url(#colorAmber)"
            ],
            "data": [
              {
                "name": "M1",
                "delays": 67
              },
              {
                "name": "M2",
                "delays": 36
              },
              {
                "name": "M3",
                "delays": 50
              },
              {
                "name": "M4",
                "delays": 22
              },
              {
                "name": "M5",
                "delays": 57
              },
              {
                "name": "M6",
                "delays": 32
              },
              {
                "name": "M7",
                "delays": 59
              }
            ]
          }
        ]
      },
      {
        "name": "Reports",
        "charts": [
          {
            "type": "LineChart",
            "title": "Quality Scores",
            "subtext": "Rolling compliance rate",
            "badge": "Live view",
            "dataKey": [
              "score"
            ],
            "colors": [
              "#34d399"
            ],
            "data": [
              {
                "name": "M1",
                "score": 78
              },
              {
                "name": "M2",
                "score": 21
              },
              {
                "name": "M3",
                "score": 43
              },
              {
                "name": "M4",
                "score": 47
              },
              {
                "name": "M5",
                "score": 74
              },
              {
                "name": "M6",
                "score": 33
              },
              {
                "name": "M7",
                "score": 56
              }
            ]
          },
          {
            "type": "AreaChart",
            "title": "Incident Reports",
            "subtext": "Monthly reported anomalies",
            "badge": "Live view",
            "dataKey": [
              "incidents"
            ],
            "colors": [
              "#f43f5e"
            ],
            "data": [
              {
                "name": "M1",
                "incidents": 34
              },
              {
                "name": "M2",
                "incidents": 38
              },
              {
                "name": "M3",
                "incidents": 47
              },
              {
                "name": "M4",
                "incidents": 37
              },
              {
                "name": "M5",
                "incidents": 60
              },
              {
                "name": "M6",
                "incidents": 77
              },
              {
                "name": "M7",
                "incidents": 21
              }
            ]
          }
        ]
      }
    ]
  },
  "Finance": {
    "title": "Finance Operations",
    "subtitle": "Interactive analytics and key metrics overview.",
    "theme": "rose",
    "kpis": [
      {
        "title": "RISK SCORE",
        "value": "13/100",
        "change": "+2.3%",
        "subtext": "vs last mo",
        "icon": "Truck",
        "color": "amber"
      },
      {
        "title": "SYSTEM LOAD",
        "value": "42%",
        "change": "-1.4%",
        "subtext": "vs last wk",
        "icon": "Wrench",
        "color": "rose"
      },
      {
        "title": "THROUGHPUT",
        "value": "854 MB/s",
        "change": "+1.3%",
        "subtext": "vs target",
        "icon": "Activity",
        "color": "rose"
      },
      {
        "title": "UPTIME",
        "value": "99.02%",
        "change": "+0.5%",
        "subtext": "yoy",
        "icon": "Box",
        "color": "cyan"
      }
    ],
    "tabs": [
      {
        "name": "Operations",
        "charts": [
          {
            "type": "LineChart",
            "title": "Finance Performance",
            "subtext": "Core metrics tracking",
            "badge": "Live view",
            "dataKey": [
              "primary",
              "secondary"
            ],
            "colors": [
              "#2dd4bf",
              "#fbbf24"
            ],
            "data": [
              {
                "name": "M1",
                "primary": 40,
                "secondary": 31
              },
              {
                "name": "M2",
                "primary": 61,
                "secondary": 38
              },
              {
                "name": "M3",
                "primary": 35,
                "secondary": 65
              },
              {
                "name": "M4",
                "primary": 37,
                "secondary": 68
              },
              {
                "name": "M5",
                "primary": 40,
                "secondary": 67
              },
              {
                "name": "M6",
                "primary": 58,
                "secondary": 61
              },
              {
                "name": "M7",
                "primary": 41,
                "secondary": 38
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Regional Distribution",
            "subtext": "Click a bar to focus (Top 7)",
            "badge": "Live view",
            "dataKey": [
              "volume"
            ],
            "colors": [
              "url(#colorEmerald)"
            ],
            "data": [
              {
                "name": "M1",
                "volume": 45
              },
              {
                "name": "M2",
                "volume": 66
              },
              {
                "name": "M3",
                "volume": 44
              },
              {
                "name": "M4",
                "volume": 70
              },
              {
                "name": "M5",
                "volume": 23
              },
              {
                "name": "M6",
                "volume": 59
              },
              {
                "name": "M7",
                "volume": 65
              }
            ]
          }
        ]
      },
      {
        "name": "Insights",
        "charts": [
          {
            "type": "AreaChart",
            "title": "Resource Utilization",
            "subtext": "Daily volume processed",
            "badge": "Live view",
            "dataKey": [
              "active"
            ],
            "colors": [
              "#818cf8"
            ],
            "data": [
              {
                "name": "M1",
                "active": 45
              },
              {
                "name": "M2",
                "active": 61
              },
              {
                "name": "M3",
                "active": 27
              },
              {
                "name": "M4",
                "active": 70
              },
              {
                "name": "M5",
                "active": 66
              },
              {
                "name": "M6",
                "active": 26
              },
              {
                "name": "M7",
                "active": 63
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Bottlenecks",
            "subtext": "SLA breaches and delays",
            "badge": "Live view",
            "dataKey": [
              "delays"
            ],
            "colors": [
              "url(#colorAmber)"
            ],
            "data": [
              {
                "name": "M1",
                "delays": 53
              },
              {
                "name": "M2",
                "delays": 51
              },
              {
                "name": "M3",
                "delays": 33
              },
              {
                "name": "M4",
                "delays": 38
              },
              {
                "name": "M5",
                "delays": 23
              },
              {
                "name": "M6",
                "delays": 69
              },
              {
                "name": "M7",
                "delays": 44
              }
            ]
          }
        ]
      },
      {
        "name": "Reports",
        "charts": [
          {
            "type": "LineChart",
            "title": "Quality Scores",
            "subtext": "Rolling compliance rate",
            "badge": "Live view",
            "dataKey": [
              "score"
            ],
            "colors": [
              "#34d399"
            ],
            "data": [
              {
                "name": "M1",
                "score": 28
              },
              {
                "name": "M2",
                "score": 53
              },
              {
                "name": "M3",
                "score": 55
              },
              {
                "name": "M4",
                "score": 41
              },
              {
                "name": "M5",
                "score": 63
              },
              {
                "name": "M6",
                "score": 66
              },
              {
                "name": "M7",
                "score": 24
              }
            ]
          },
          {
            "type": "AreaChart",
            "title": "Incident Reports",
            "subtext": "Monthly reported anomalies",
            "badge": "Live view",
            "dataKey": [
              "incidents"
            ],
            "colors": [
              "#f43f5e"
            ],
            "data": [
              {
                "name": "M1",
                "incidents": 36
              },
              {
                "name": "M2",
                "incidents": 37
              },
              {
                "name": "M3",
                "incidents": 42
              },
              {
                "name": "M4",
                "incidents": 71
              },
              {
                "name": "M5",
                "incidents": 49
              },
              {
                "name": "M6",
                "incidents": 23
              },
              {
                "name": "M7",
                "incidents": 46
              }
            ]
          }
        ]
      }
    ]
  },
  "FinancialServices": {
    "title": "Financial Services Operations",
    "subtitle": "Interactive analytics and key metrics overview.",
    "theme": "indigo",
    "kpis": [
      {
        "title": "SYSTEM LOAD",
        "value": "73%",
        "change": "+1.1%",
        "subtext": "vs last mo",
        "icon": "Activity",
        "color": "rose"
      },
      {
        "title": "THROUGHPUT",
        "value": "576 MB/s",
        "change": "-1.5%",
        "subtext": "vs last wk",
        "icon": "Box",
        "color": "indigo"
      },
      {
        "title": "UPTIME",
        "value": "99.83%",
        "change": "+1.1%",
        "subtext": "vs target",
        "icon": "ShieldCheck",
        "color": "cyan"
      },
      {
        "title": "EFFICIENCY",
        "value": "78%",
        "change": "+0.3%",
        "subtext": "yoy",
        "icon": "Database",
        "color": "indigo"
      }
    ],
    "tabs": [
      {
        "name": "Insights",
        "charts": [
          {
            "type": "LineChart",
            "title": "FinancialServices Performance",
            "subtext": "Core metrics tracking",
            "badge": "Live view",
            "dataKey": [
              "primary",
              "secondary"
            ],
            "colors": [
              "#2dd4bf",
              "#fbbf24"
            ],
            "data": [
              {
                "name": "M1",
                "primary": 59,
                "secondary": 81
              },
              {
                "name": "M2",
                "primary": 74,
                "secondary": 76
              },
              {
                "name": "M3",
                "primary": 81,
                "secondary": 42
              },
              {
                "name": "M4",
                "primary": 37,
                "secondary": 30
              },
              {
                "name": "M5",
                "primary": 96,
                "secondary": 102
              },
              {
                "name": "M6",
                "primary": 24,
                "secondary": 94
              },
              {
                "name": "M7",
                "primary": 46,
                "secondary": 94
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Regional Distribution",
            "subtext": "Click a bar to focus (Top 7)",
            "badge": "Live view",
            "dataKey": [
              "volume"
            ],
            "colors": [
              "url(#colorEmerald)"
            ],
            "data": [
              {
                "name": "M1",
                "volume": 26
              },
              {
                "name": "M2",
                "volume": 77
              },
              {
                "name": "M3",
                "volume": 91
              },
              {
                "name": "M4",
                "volume": 32
              },
              {
                "name": "M5",
                "volume": 78
              },
              {
                "name": "M6",
                "volume": 65
              },
              {
                "name": "M7",
                "volume": 72
              }
            ]
          }
        ]
      },
      {
        "name": "Reports",
        "charts": [
          {
            "type": "AreaChart",
            "title": "Resource Utilization",
            "subtext": "Daily volume processed",
            "badge": "Live view",
            "dataKey": [
              "active"
            ],
            "colors": [
              "#818cf8"
            ],
            "data": [
              {
                "name": "M1",
                "active": 87
              },
              {
                "name": "M2",
                "active": 52
              },
              {
                "name": "M3",
                "active": 40
              },
              {
                "name": "M4",
                "active": 20
              },
              {
                "name": "M5",
                "active": 67
              },
              {
                "name": "M6",
                "active": 67
              },
              {
                "name": "M7",
                "active": 78
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Bottlenecks",
            "subtext": "SLA breaches and delays",
            "badge": "Live view",
            "dataKey": [
              "delays"
            ],
            "colors": [
              "url(#colorAmber)"
            ],
            "data": [
              {
                "name": "M1",
                "delays": 24
              },
              {
                "name": "M2",
                "delays": 56
              },
              {
                "name": "M3",
                "delays": 62
              },
              {
                "name": "M4",
                "delays": 48
              },
              {
                "name": "M5",
                "delays": 39
              },
              {
                "name": "M6",
                "delays": 86
              },
              {
                "name": "M7",
                "delays": 82
              }
            ]
          }
        ]
      },
      {
        "name": "Overview",
        "charts": [
          {
            "type": "LineChart",
            "title": "Quality Scores",
            "subtext": "Rolling compliance rate",
            "badge": "Live view",
            "dataKey": [
              "score"
            ],
            "colors": [
              "#34d399"
            ],
            "data": [
              {
                "name": "M1",
                "score": 71
              },
              {
                "name": "M2",
                "score": 74
              },
              {
                "name": "M3",
                "score": 60
              },
              {
                "name": "M4",
                "score": 37
              },
              {
                "name": "M5",
                "score": 55
              },
              {
                "name": "M6",
                "score": 98
              },
              {
                "name": "M7",
                "score": 62
              }
            ]
          },
          {
            "type": "AreaChart",
            "title": "Incident Reports",
            "subtext": "Monthly reported anomalies",
            "badge": "Live view",
            "dataKey": [
              "incidents"
            ],
            "colors": [
              "#f43f5e"
            ],
            "data": [
              {
                "name": "M1",
                "incidents": 25
              },
              {
                "name": "M2",
                "incidents": 47
              },
              {
                "name": "M3",
                "incidents": 68
              },
              {
                "name": "M4",
                "incidents": 52
              },
              {
                "name": "M5",
                "incidents": 29
              },
              {
                "name": "M6",
                "incidents": 93
              },
              {
                "name": "M7",
                "incidents": 91
              }
            ]
          }
        ]
      }
    ]
  },
  "Healthcare": {
    "title": "Healthcare Operations",
    "subtitle": "Interactive analytics and key metrics overview.",
    "theme": "cyan",
    "kpis": [
      {
        "title": "SYSTEM LOAD",
        "value": "41%",
        "change": "+1.2%",
        "subtext": "vs last mo",
        "icon": "Activity",
        "color": "rose"
      },
      {
        "title": "THROUGHPUT",
        "value": "121 MB/s",
        "change": "-2.5%",
        "subtext": "vs last wk",
        "icon": "Box",
        "color": "cyan"
      },
      {
        "title": "UPTIME",
        "value": "99.51%",
        "change": "+0.1%",
        "subtext": "vs target",
        "icon": "ShieldCheck",
        "color": "cyan"
      },
      {
        "title": "EFFICIENCY",
        "value": "86%",
        "change": "+0.6%",
        "subtext": "yoy",
        "icon": "Database",
        "color": "cyan"
      }
    ],
    "tabs": [
      {
        "name": "Analytics",
        "charts": [
          {
            "type": "LineChart",
            "title": "Healthcare Performance",
            "subtext": "Core metrics tracking",
            "badge": "Live view",
            "dataKey": [
              "primary",
              "secondary"
            ],
            "colors": [
              "#2dd4bf",
              "#fbbf24"
            ],
            "data": [
              {
                "name": "M1",
                "primary": 44,
                "secondary": 57
              },
              {
                "name": "M2",
                "primary": 36,
                "secondary": 66
              },
              {
                "name": "M3",
                "primary": 28,
                "secondary": 64
              },
              {
                "name": "M4",
                "primary": 21,
                "secondary": 78
              },
              {
                "name": "M5",
                "primary": 42,
                "secondary": 76
              },
              {
                "name": "M6",
                "primary": 45,
                "secondary": 55
              },
              {
                "name": "M7",
                "primary": 70,
                "secondary": 76
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Regional Distribution",
            "subtext": "Click a bar to focus (Top 7)",
            "badge": "Live view",
            "dataKey": [
              "volume"
            ],
            "colors": [
              "url(#colorEmerald)"
            ],
            "data": [
              {
                "name": "M1",
                "volume": 56
              },
              {
                "name": "M2",
                "volume": 45
              },
              {
                "name": "M3",
                "volume": 67
              },
              {
                "name": "M4",
                "volume": 39
              },
              {
                "name": "M5",
                "volume": 52
              },
              {
                "name": "M6",
                "volume": 28
              },
              {
                "name": "M7",
                "volume": 29
              }
            ]
          }
        ]
      },
      {
        "name": "Operations",
        "charts": [
          {
            "type": "AreaChart",
            "title": "Resource Utilization",
            "subtext": "Daily volume processed",
            "badge": "Live view",
            "dataKey": [
              "active"
            ],
            "colors": [
              "#818cf8"
            ],
            "data": [
              {
                "name": "M1",
                "active": 31
              },
              {
                "name": "M2",
                "active": 63
              },
              {
                "name": "M3",
                "active": 69
              },
              {
                "name": "M4",
                "active": 28
              },
              {
                "name": "M5",
                "active": 38
              },
              {
                "name": "M6",
                "active": 64
              },
              {
                "name": "M7",
                "active": 69
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Bottlenecks",
            "subtext": "SLA breaches and delays",
            "badge": "Live view",
            "dataKey": [
              "delays"
            ],
            "colors": [
              "url(#colorAmber)"
            ],
            "data": [
              {
                "name": "M1",
                "delays": 43
              },
              {
                "name": "M2",
                "delays": 55
              },
              {
                "name": "M3",
                "delays": 63
              },
              {
                "name": "M4",
                "delays": 40
              },
              {
                "name": "M5",
                "delays": 34
              },
              {
                "name": "M6",
                "delays": 40
              },
              {
                "name": "M7",
                "delays": 33
              }
            ]
          }
        ]
      },
      {
        "name": "Insights",
        "charts": [
          {
            "type": "LineChart",
            "title": "Quality Scores",
            "subtext": "Rolling compliance rate",
            "badge": "Live view",
            "dataKey": [
              "score"
            ],
            "colors": [
              "#34d399"
            ],
            "data": [
              {
                "name": "M1",
                "score": 33
              },
              {
                "name": "M2",
                "score": 40
              },
              {
                "name": "M3",
                "score": 60
              },
              {
                "name": "M4",
                "score": 30
              },
              {
                "name": "M5",
                "score": 23
              },
              {
                "name": "M6",
                "score": 60
              },
              {
                "name": "M7",
                "score": 29
              }
            ]
          },
          {
            "type": "AreaChart",
            "title": "Incident Reports",
            "subtext": "Monthly reported anomalies",
            "badge": "Live view",
            "dataKey": [
              "incidents"
            ],
            "colors": [
              "#f43f5e"
            ],
            "data": [
              {
                "name": "M1",
                "incidents": 30
              },
              {
                "name": "M2",
                "incidents": 56
              },
              {
                "name": "M3",
                "incidents": 31
              },
              {
                "name": "M4",
                "incidents": 51
              },
              {
                "name": "M5",
                "incidents": 50
              },
              {
                "name": "M6",
                "incidents": 29
              },
              {
                "name": "M7",
                "incidents": 27
              }
            ]
          }
        ]
      }
    ]
  },
  "Hospitality": {
    "title": "Hospitality Operations",
    "subtitle": "Interactive analytics and key metrics overview.",
    "theme": "fuchsia",
    "kpis": [
      {
        "title": "EFFICIENCY",
        "value": "87%",
        "change": "+0.9%",
        "subtext": "vs last mo",
        "icon": "Activity",
        "color": "fuchsia"
      },
      {
        "title": "PROCESSING",
        "value": "22k/hr",
        "change": "-1.9%",
        "subtext": "vs last wk",
        "icon": "Box",
        "color": "emerald"
      },
      {
        "title": "RISK SCORE",
        "value": "9/100",
        "change": "+1.5%",
        "subtext": "vs target",
        "icon": "ShieldCheck",
        "color": "amber"
      },
      {
        "title": "SYSTEM LOAD",
        "value": "52%",
        "change": "+0.3%",
        "subtext": "yoy",
        "icon": "Database",
        "color": "rose"
      }
    ],
    "tabs": [
      {
        "name": "Operations",
        "charts": [
          {
            "type": "LineChart",
            "title": "Hospitality Performance",
            "subtext": "Core metrics tracking",
            "badge": "Live view",
            "dataKey": [
              "primary",
              "secondary"
            ],
            "colors": [
              "#2dd4bf",
              "#fbbf24"
            ],
            "data": [
              {
                "name": "M1",
                "primary": 65,
                "secondary": 72
              },
              {
                "name": "M2",
                "primary": 74,
                "secondary": 39
              },
              {
                "name": "M3",
                "primary": 47,
                "secondary": 86
              },
              {
                "name": "M4",
                "primary": 32,
                "secondary": 69
              },
              {
                "name": "M5",
                "primary": 69,
                "secondary": 42
              },
              {
                "name": "M6",
                "primary": 76,
                "secondary": 76
              },
              {
                "name": "M7",
                "primary": 40,
                "secondary": 68
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Regional Distribution",
            "subtext": "Click a bar to focus (Top 7)",
            "badge": "Live view",
            "dataKey": [
              "volume"
            ],
            "colors": [
              "url(#colorEmerald)"
            ],
            "data": [
              {
                "name": "M1",
                "volume": 39
              },
              {
                "name": "M2",
                "volume": 65
              },
              {
                "name": "M3",
                "volume": 30
              },
              {
                "name": "M4",
                "volume": 63
              },
              {
                "name": "M5",
                "volume": 50
              },
              {
                "name": "M6",
                "volume": 39
              },
              {
                "name": "M7",
                "volume": 38
              }
            ]
          }
        ]
      },
      {
        "name": "Insights",
        "charts": [
          {
            "type": "AreaChart",
            "title": "Resource Utilization",
            "subtext": "Daily volume processed",
            "badge": "Live view",
            "dataKey": [
              "active"
            ],
            "colors": [
              "#818cf8"
            ],
            "data": [
              {
                "name": "M1",
                "active": 42
              },
              {
                "name": "M2",
                "active": 33
              },
              {
                "name": "M3",
                "active": 61
              },
              {
                "name": "M4",
                "active": 36
              },
              {
                "name": "M5",
                "active": 30
              },
              {
                "name": "M6",
                "active": 43
              },
              {
                "name": "M7",
                "active": 47
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Bottlenecks",
            "subtext": "SLA breaches and delays",
            "badge": "Live view",
            "dataKey": [
              "delays"
            ],
            "colors": [
              "url(#colorAmber)"
            ],
            "data": [
              {
                "name": "M1",
                "delays": 55
              },
              {
                "name": "M2",
                "delays": 72
              },
              {
                "name": "M3",
                "delays": 36
              },
              {
                "name": "M4",
                "delays": 62
              },
              {
                "name": "M5",
                "delays": 55
              },
              {
                "name": "M6",
                "delays": 34
              },
              {
                "name": "M7",
                "delays": 80
              }
            ]
          }
        ]
      },
      {
        "name": "Reports",
        "charts": [
          {
            "type": "LineChart",
            "title": "Quality Scores",
            "subtext": "Rolling compliance rate",
            "badge": "Live view",
            "dataKey": [
              "score"
            ],
            "colors": [
              "#34d399"
            ],
            "data": [
              {
                "name": "M1",
                "score": 62
              },
              {
                "name": "M2",
                "score": 60
              },
              {
                "name": "M3",
                "score": 54
              },
              {
                "name": "M4",
                "score": 62
              },
              {
                "name": "M5",
                "score": 63
              },
              {
                "name": "M6",
                "score": 66
              },
              {
                "name": "M7",
                "score": 38
              }
            ]
          },
          {
            "type": "AreaChart",
            "title": "Incident Reports",
            "subtext": "Monthly reported anomalies",
            "badge": "Live view",
            "dataKey": [
              "incidents"
            ],
            "colors": [
              "#f43f5e"
            ],
            "data": [
              {
                "name": "M1",
                "incidents": 50
              },
              {
                "name": "M2",
                "incidents": 34
              },
              {
                "name": "M3",
                "incidents": 29
              },
              {
                "name": "M4",
                "incidents": 34
              },
              {
                "name": "M5",
                "incidents": 58
              },
              {
                "name": "M6",
                "incidents": 26
              },
              {
                "name": "M7",
                "incidents": 43
              }
            ]
          }
        ]
      }
    ]
  },
  "Insurance": {
    "title": "Insurance Operations",
    "subtitle": "Interactive analytics and key metrics overview.",
    "theme": "emerald",
    "kpis": [
      {
        "title": "EFFICIENCY",
        "value": "81%",
        "change": "+2.6%",
        "subtext": "vs last mo",
        "icon": "Activity",
        "color": "emerald"
      },
      {
        "title": "PROCESSING",
        "value": "36k/hr",
        "change": "-0.1%",
        "subtext": "vs last wk",
        "icon": "Box",
        "color": "emerald"
      },
      {
        "title": "RISK SCORE",
        "value": "5/100",
        "change": "+1.0%",
        "subtext": "vs target",
        "icon": "ShieldCheck",
        "color": "amber"
      },
      {
        "title": "SYSTEM LOAD",
        "value": "76%",
        "change": "+0.1%",
        "subtext": "yoy",
        "icon": "Database",
        "color": "rose"
      }
    ],
    "tabs": [
      {
        "name": "Analytics",
        "charts": [
          {
            "type": "LineChart",
            "title": "Insurance Performance",
            "subtext": "Core metrics tracking",
            "badge": "Live view",
            "dataKey": [
              "primary",
              "secondary"
            ],
            "colors": [
              "#2dd4bf",
              "#fbbf24"
            ],
            "data": [
              {
                "name": "M1",
                "primary": 62,
                "secondary": 106
              },
              {
                "name": "M2",
                "primary": 77,
                "secondary": 112
              },
              {
                "name": "M3",
                "primary": 85,
                "secondary": 47
              },
              {
                "name": "M4",
                "primary": 65,
                "secondary": 99
              },
              {
                "name": "M5",
                "primary": 33,
                "secondary": 53
              },
              {
                "name": "M6",
                "primary": 28,
                "secondary": 114
              },
              {
                "name": "M7",
                "primary": 95,
                "secondary": 65
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Regional Distribution",
            "subtext": "Click a bar to focus (Top 7)",
            "badge": "Live view",
            "dataKey": [
              "volume"
            ],
            "colors": [
              "url(#colorEmerald)"
            ],
            "data": [
              {
                "name": "M1",
                "volume": 63
              },
              {
                "name": "M2",
                "volume": 92
              },
              {
                "name": "M3",
                "volume": 23
              },
              {
                "name": "M4",
                "volume": 28
              },
              {
                "name": "M5",
                "volume": 96
              },
              {
                "name": "M6",
                "volume": 39
              },
              {
                "name": "M7",
                "volume": 44
              }
            ]
          }
        ]
      },
      {
        "name": "Operations",
        "charts": [
          {
            "type": "AreaChart",
            "title": "Resource Utilization",
            "subtext": "Daily volume processed",
            "badge": "Live view",
            "dataKey": [
              "active"
            ],
            "colors": [
              "#818cf8"
            ],
            "data": [
              {
                "name": "M1",
                "active": 57
              },
              {
                "name": "M2",
                "active": 52
              },
              {
                "name": "M3",
                "active": 61
              },
              {
                "name": "M4",
                "active": 97
              },
              {
                "name": "M5",
                "active": 23
              },
              {
                "name": "M6",
                "active": 53
              },
              {
                "name": "M7",
                "active": 73
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Bottlenecks",
            "subtext": "SLA breaches and delays",
            "badge": "Live view",
            "dataKey": [
              "delays"
            ],
            "colors": [
              "url(#colorAmber)"
            ],
            "data": [
              {
                "name": "M1",
                "delays": 24
              },
              {
                "name": "M2",
                "delays": 103
              },
              {
                "name": "M3",
                "delays": 29
              },
              {
                "name": "M4",
                "delays": 62
              },
              {
                "name": "M5",
                "delays": 92
              },
              {
                "name": "M6",
                "delays": 29
              },
              {
                "name": "M7",
                "delays": 77
              }
            ]
          }
        ]
      },
      {
        "name": "Insights",
        "charts": [
          {
            "type": "LineChart",
            "title": "Quality Scores",
            "subtext": "Rolling compliance rate",
            "badge": "Live view",
            "dataKey": [
              "score"
            ],
            "colors": [
              "#34d399"
            ],
            "data": [
              {
                "name": "M1",
                "score": 87
              },
              {
                "name": "M2",
                "score": 42
              },
              {
                "name": "M3",
                "score": 23
              },
              {
                "name": "M4",
                "score": 43
              },
              {
                "name": "M5",
                "score": 91
              },
              {
                "name": "M6",
                "score": 43
              },
              {
                "name": "M7",
                "score": 84
              }
            ]
          },
          {
            "type": "AreaChart",
            "title": "Incident Reports",
            "subtext": "Monthly reported anomalies",
            "badge": "Live view",
            "dataKey": [
              "incidents"
            ],
            "colors": [
              "#f43f5e"
            ],
            "data": [
              {
                "name": "M1",
                "incidents": 64
              },
              {
                "name": "M2",
                "incidents": 24
              },
              {
                "name": "M3",
                "incidents": 76
              },
              {
                "name": "M4",
                "incidents": 93
              },
              {
                "name": "M5",
                "incidents": 60
              },
              {
                "name": "M6",
                "incidents": 70
              },
              {
                "name": "M7",
                "incidents": 48
              }
            ]
          }
        ]
      }
    ]
  },
  "LegalServices": {
    "title": "Legal Services Operations",
    "subtitle": "Interactive analytics and key metrics overview.",
    "theme": "amber",
    "kpis": [
      {
        "title": "PROCESSING",
        "value": "41k/hr",
        "change": "+2.6%",
        "subtext": "vs last mo",
        "icon": "ShieldCheck",
        "color": "emerald"
      },
      {
        "title": "RISK SCORE",
        "value": "4/100",
        "change": "-1.8%",
        "subtext": "vs last wk",
        "icon": "Database",
        "color": "amber"
      },
      {
        "title": "SYSTEM LOAD",
        "value": "61%",
        "change": "+2.0%",
        "subtext": "vs target",
        "icon": "Truck",
        "color": "rose"
      },
      {
        "title": "THROUGHPUT",
        "value": "823 MB/s",
        "change": "+0.5%",
        "subtext": "yoy",
        "icon": "Wrench",
        "color": "amber"
      }
    ],
    "tabs": [
      {
        "name": "Analytics",
        "charts": [
          {
            "type": "LineChart",
            "title": "LegalServices Performance",
            "subtext": "Core metrics tracking",
            "badge": "Live view",
            "dataKey": [
              "primary",
              "secondary"
            ],
            "colors": [
              "#2dd4bf",
              "#fbbf24"
            ],
            "data": [
              {
                "name": "M1",
                "primary": 71,
                "secondary": 39
              },
              {
                "name": "M2",
                "primary": 52,
                "secondary": 36
              },
              {
                "name": "M3",
                "primary": 36,
                "secondary": 88
              },
              {
                "name": "M4",
                "primary": 87,
                "secondary": 47
              },
              {
                "name": "M5",
                "primary": 79,
                "secondary": 86
              },
              {
                "name": "M6",
                "primary": 82,
                "secondary": 31
              },
              {
                "name": "M7",
                "primary": 43,
                "secondary": 44
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Regional Distribution",
            "subtext": "Click a bar to focus (Top 7)",
            "badge": "Live view",
            "dataKey": [
              "volume"
            ],
            "colors": [
              "url(#colorEmerald)"
            ],
            "data": [
              {
                "name": "M1",
                "volume": 76
              },
              {
                "name": "M2",
                "volume": 74
              },
              {
                "name": "M3",
                "volume": 87
              },
              {
                "name": "M4",
                "volume": 53
              },
              {
                "name": "M5",
                "volume": 68
              },
              {
                "name": "M6",
                "volume": 36
              },
              {
                "name": "M7",
                "volume": 65
              }
            ]
          }
        ]
      },
      {
        "name": "Operations",
        "charts": [
          {
            "type": "AreaChart",
            "title": "Resource Utilization",
            "subtext": "Daily volume processed",
            "badge": "Live view",
            "dataKey": [
              "active"
            ],
            "colors": [
              "#818cf8"
            ],
            "data": [
              {
                "name": "M1",
                "active": 31
              },
              {
                "name": "M2",
                "active": 79
              },
              {
                "name": "M3",
                "active": 66
              },
              {
                "name": "M4",
                "active": 23
              },
              {
                "name": "M5",
                "active": 78
              },
              {
                "name": "M6",
                "active": 63
              },
              {
                "name": "M7",
                "active": 41
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Bottlenecks",
            "subtext": "SLA breaches and delays",
            "badge": "Live view",
            "dataKey": [
              "delays"
            ],
            "colors": [
              "url(#colorAmber)"
            ],
            "data": [
              {
                "name": "M1",
                "delays": 39
              },
              {
                "name": "M2",
                "delays": 26
              },
              {
                "name": "M3",
                "delays": 48
              },
              {
                "name": "M4",
                "delays": 80
              },
              {
                "name": "M5",
                "delays": 50
              },
              {
                "name": "M6",
                "delays": 66
              },
              {
                "name": "M7",
                "delays": 31
              }
            ]
          }
        ]
      },
      {
        "name": "Insights",
        "charts": [
          {
            "type": "LineChart",
            "title": "Quality Scores",
            "subtext": "Rolling compliance rate",
            "badge": "Live view",
            "dataKey": [
              "score"
            ],
            "colors": [
              "#34d399"
            ],
            "data": [
              {
                "name": "M1",
                "score": 26
              },
              {
                "name": "M2",
                "score": 62
              },
              {
                "name": "M3",
                "score": 32
              },
              {
                "name": "M4",
                "score": 44
              },
              {
                "name": "M5",
                "score": 66
              },
              {
                "name": "M6",
                "score": 35
              },
              {
                "name": "M7",
                "score": 80
              }
            ]
          },
          {
            "type": "AreaChart",
            "title": "Incident Reports",
            "subtext": "Monthly reported anomalies",
            "badge": "Live view",
            "dataKey": [
              "incidents"
            ],
            "colors": [
              "#f43f5e"
            ],
            "data": [
              {
                "name": "M1",
                "incidents": 23
              },
              {
                "name": "M2",
                "incidents": 25
              },
              {
                "name": "M3",
                "incidents": 81
              },
              {
                "name": "M4",
                "incidents": 43
              },
              {
                "name": "M5",
                "incidents": 88
              },
              {
                "name": "M6",
                "incidents": 54
              },
              {
                "name": "M7",
                "incidents": 77
              }
            ]
          }
        ]
      }
    ]
  },
  "Manufacturing": {
    "title": "Manufacturing Operations",
    "subtitle": "Interactive analytics and key metrics overview.",
    "theme": "rose",
    "kpis": [
      {
        "title": "EFFICIENCY",
        "value": "89%",
        "change": "+1.6%",
        "subtext": "vs last mo",
        "icon": "Activity",
        "color": "rose"
      },
      {
        "title": "PROCESSING",
        "value": "24k/hr",
        "change": "-1.7%",
        "subtext": "vs last wk",
        "icon": "Box",
        "color": "emerald"
      },
      {
        "title": "RISK SCORE",
        "value": "9/100",
        "change": "+0.3%",
        "subtext": "vs target",
        "icon": "ShieldCheck",
        "color": "amber"
      },
      {
        "title": "SYSTEM LOAD",
        "value": "74%",
        "change": "+0.2%",
        "subtext": "yoy",
        "icon": "Database",
        "color": "rose"
      }
    ],
    "tabs": [
      {
        "name": "Reports",
        "charts": [
          {
            "type": "LineChart",
            "title": "Manufacturing Performance",
            "subtext": "Core metrics tracking",
            "badge": "Live view",
            "dataKey": [
              "primary",
              "secondary"
            ],
            "colors": [
              "#2dd4bf",
              "#fbbf24"
            ],
            "data": [
              {
                "name": "M1",
                "primary": 101,
                "secondary": 30
              },
              {
                "name": "M2",
                "primary": 22,
                "secondary": 81
              },
              {
                "name": "M3",
                "primary": 95,
                "secondary": 111
              },
              {
                "name": "M4",
                "primary": 49,
                "secondary": 101
              },
              {
                "name": "M5",
                "primary": 73,
                "secondary": 33
              },
              {
                "name": "M6",
                "primary": 85,
                "secondary": 78
              },
              {
                "name": "M7",
                "primary": 74,
                "secondary": 47
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Regional Distribution",
            "subtext": "Click a bar to focus (Top 7)",
            "badge": "Live view",
            "dataKey": [
              "volume"
            ],
            "colors": [
              "url(#colorEmerald)"
            ],
            "data": [
              {
                "name": "M1",
                "volume": 78
              },
              {
                "name": "M2",
                "volume": 48
              },
              {
                "name": "M3",
                "volume": 78
              },
              {
                "name": "M4",
                "volume": 71
              },
              {
                "name": "M5",
                "volume": 22
              },
              {
                "name": "M6",
                "volume": 80
              },
              {
                "name": "M7",
                "volume": 61
              }
            ]
          }
        ]
      },
      {
        "name": "Overview",
        "charts": [
          {
            "type": "AreaChart",
            "title": "Resource Utilization",
            "subtext": "Daily volume processed",
            "badge": "Live view",
            "dataKey": [
              "active"
            ],
            "colors": [
              "#818cf8"
            ],
            "data": [
              {
                "name": "M1",
                "active": 85
              },
              {
                "name": "M2",
                "active": 46
              },
              {
                "name": "M3",
                "active": 96
              },
              {
                "name": "M4",
                "active": 37
              },
              {
                "name": "M5",
                "active": 41
              },
              {
                "name": "M6",
                "active": 25
              },
              {
                "name": "M7",
                "active": 49
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Bottlenecks",
            "subtext": "SLA breaches and delays",
            "badge": "Live view",
            "dataKey": [
              "delays"
            ],
            "colors": [
              "url(#colorAmber)"
            ],
            "data": [
              {
                "name": "M1",
                "delays": 27
              },
              {
                "name": "M2",
                "delays": 44
              },
              {
                "name": "M3",
                "delays": 29
              },
              {
                "name": "M4",
                "delays": 63
              },
              {
                "name": "M5",
                "delays": 99
              },
              {
                "name": "M6",
                "delays": 89
              },
              {
                "name": "M7",
                "delays": 87
              }
            ]
          }
        ]
      },
      {
        "name": "Analytics",
        "charts": [
          {
            "type": "LineChart",
            "title": "Quality Scores",
            "subtext": "Rolling compliance rate",
            "badge": "Live view",
            "dataKey": [
              "score"
            ],
            "colors": [
              "#34d399"
            ],
            "data": [
              {
                "name": "M1",
                "score": 58
              },
              {
                "name": "M2",
                "score": 23
              },
              {
                "name": "M3",
                "score": 53
              },
              {
                "name": "M4",
                "score": 63
              },
              {
                "name": "M5",
                "score": 28
              },
              {
                "name": "M6",
                "score": 61
              },
              {
                "name": "M7",
                "score": 28
              }
            ]
          },
          {
            "type": "AreaChart",
            "title": "Incident Reports",
            "subtext": "Monthly reported anomalies",
            "badge": "Live view",
            "dataKey": [
              "incidents"
            ],
            "colors": [
              "#f43f5e"
            ],
            "data": [
              {
                "name": "M1",
                "incidents": 64
              },
              {
                "name": "M2",
                "incidents": 55
              },
              {
                "name": "M3",
                "incidents": 61
              },
              {
                "name": "M4",
                "incidents": 62
              },
              {
                "name": "M5",
                "incidents": 63
              },
              {
                "name": "M6",
                "incidents": 37
              },
              {
                "name": "M7",
                "incidents": 94
              }
            ]
          }
        ]
      }
    ]
  },
  "RealEstate": {
    "title": "Real Estate Operations",
    "subtitle": "Interactive analytics and key metrics overview.",
    "theme": "indigo",
    "kpis": [
      {
        "title": "EFFICIENCY",
        "value": "77%",
        "change": "+1.5%",
        "subtext": "vs last mo",
        "icon": "Activity",
        "color": "indigo"
      },
      {
        "title": "PROCESSING",
        "value": "32k/hr",
        "change": "-3.0%",
        "subtext": "vs last wk",
        "icon": "Box",
        "color": "emerald"
      },
      {
        "title": "RISK SCORE",
        "value": "1/100",
        "change": "+0.2%",
        "subtext": "vs target",
        "icon": "ShieldCheck",
        "color": "amber"
      },
      {
        "title": "SYSTEM LOAD",
        "value": "52%",
        "change": "+0.1%",
        "subtext": "yoy",
        "icon": "Database",
        "color": "rose"
      }
    ],
    "tabs": [
      {
        "name": "Operations",
        "charts": [
          {
            "type": "LineChart",
            "title": "RealEstate Performance",
            "subtext": "Core metrics tracking",
            "badge": "Live view",
            "dataKey": [
              "primary",
              "secondary"
            ],
            "colors": [
              "#2dd4bf",
              "#fbbf24"
            ],
            "data": [
              {
                "name": "M1",
                "primary": 27,
                "secondary": 81
              },
              {
                "name": "M2",
                "primary": 65,
                "secondary": 31
              },
              {
                "name": "M3",
                "primary": 60,
                "secondary": 87
              },
              {
                "name": "M4",
                "primary": 69,
                "secondary": 55
              },
              {
                "name": "M5",
                "primary": 69,
                "secondary": 80
              },
              {
                "name": "M6",
                "primary": 39,
                "secondary": 41
              },
              {
                "name": "M7",
                "primary": 58,
                "secondary": 43
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Regional Distribution",
            "subtext": "Click a bar to focus (Top 7)",
            "badge": "Live view",
            "dataKey": [
              "volume"
            ],
            "colors": [
              "url(#colorEmerald)"
            ],
            "data": [
              {
                "name": "M1",
                "volume": 72
              },
              {
                "name": "M2",
                "volume": 42
              },
              {
                "name": "M3",
                "volume": 67
              },
              {
                "name": "M4",
                "volume": 58
              },
              {
                "name": "M5",
                "volume": 30
              },
              {
                "name": "M6",
                "volume": 24
              },
              {
                "name": "M7",
                "volume": 62
              }
            ]
          }
        ]
      },
      {
        "name": "Insights",
        "charts": [
          {
            "type": "AreaChart",
            "title": "Resource Utilization",
            "subtext": "Daily volume processed",
            "badge": "Live view",
            "dataKey": [
              "active"
            ],
            "colors": [
              "#818cf8"
            ],
            "data": [
              {
                "name": "M1",
                "active": 77
              },
              {
                "name": "M2",
                "active": 26
              },
              {
                "name": "M3",
                "active": 27
              },
              {
                "name": "M4",
                "active": 57
              },
              {
                "name": "M5",
                "active": 43
              },
              {
                "name": "M6",
                "active": 49
              },
              {
                "name": "M7",
                "active": 41
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Bottlenecks",
            "subtext": "SLA breaches and delays",
            "badge": "Live view",
            "dataKey": [
              "delays"
            ],
            "colors": [
              "url(#colorAmber)"
            ],
            "data": [
              {
                "name": "M1",
                "delays": 22
              },
              {
                "name": "M2",
                "delays": 31
              },
              {
                "name": "M3",
                "delays": 37
              },
              {
                "name": "M4",
                "delays": 29
              },
              {
                "name": "M5",
                "delays": 78
              },
              {
                "name": "M6",
                "delays": 36
              },
              {
                "name": "M7",
                "delays": 39
              }
            ]
          }
        ]
      },
      {
        "name": "Reports",
        "charts": [
          {
            "type": "LineChart",
            "title": "Quality Scores",
            "subtext": "Rolling compliance rate",
            "badge": "Live view",
            "dataKey": [
              "score"
            ],
            "colors": [
              "#34d399"
            ],
            "data": [
              {
                "name": "M1",
                "score": 78
              },
              {
                "name": "M2",
                "score": 66
              },
              {
                "name": "M3",
                "score": 61
              },
              {
                "name": "M4",
                "score": 38
              },
              {
                "name": "M5",
                "score": 65
              },
              {
                "name": "M6",
                "score": 64
              },
              {
                "name": "M7",
                "score": 21
              }
            ]
          },
          {
            "type": "AreaChart",
            "title": "Incident Reports",
            "subtext": "Monthly reported anomalies",
            "badge": "Live view",
            "dataKey": [
              "incidents"
            ],
            "colors": [
              "#f43f5e"
            ],
            "data": [
              {
                "name": "M1",
                "incidents": 30
              },
              {
                "name": "M2",
                "incidents": 38
              },
              {
                "name": "M3",
                "incidents": 72
              },
              {
                "name": "M4",
                "incidents": 61
              },
              {
                "name": "M5",
                "incidents": 24
              },
              {
                "name": "M6",
                "incidents": 70
              },
              {
                "name": "M7",
                "incidents": 25
              }
            ]
          }
        ]
      }
    ]
  },
  "Retail": {
    "title": "Retail Operations",
    "subtitle": "Interactive analytics and key metrics overview.",
    "theme": "cyan",
    "kpis": [
      {
        "title": "PROCESSING",
        "value": "47k/hr",
        "change": "+1.2%",
        "subtext": "vs last mo",
        "icon": "ShieldCheck",
        "color": "emerald"
      },
      {
        "title": "RISK SCORE",
        "value": "6/100",
        "change": "-2.2%",
        "subtext": "vs last wk",
        "icon": "Database",
        "color": "amber"
      },
      {
        "title": "SYSTEM LOAD",
        "value": "47%",
        "change": "+1.6%",
        "subtext": "vs target",
        "icon": "Truck",
        "color": "rose"
      },
      {
        "title": "THROUGHPUT",
        "value": "709 MB/s",
        "change": "+0.9%",
        "subtext": "yoy",
        "icon": "Wrench",
        "color": "cyan"
      }
    ],
    "tabs": [
      {
        "name": "Operations",
        "charts": [
          {
            "type": "LineChart",
            "title": "Retail Performance",
            "subtext": "Core metrics tracking",
            "badge": "Live view",
            "dataKey": [
              "primary",
              "secondary"
            ],
            "colors": [
              "#2dd4bf",
              "#fbbf24"
            ],
            "data": [
              {
                "name": "M1",
                "primary": 70,
                "secondary": 65
              },
              {
                "name": "M2",
                "primary": 37,
                "secondary": 79
              },
              {
                "name": "M3",
                "primary": 41,
                "secondary": 46
              },
              {
                "name": "M4",
                "primary": 52,
                "secondary": 75
              },
              {
                "name": "M5",
                "primary": 40,
                "secondary": 53
              },
              {
                "name": "M6",
                "primary": 72,
                "secondary": 38
              },
              {
                "name": "M7",
                "primary": 39,
                "secondary": 58
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Regional Distribution",
            "subtext": "Click a bar to focus (Top 7)",
            "badge": "Live view",
            "dataKey": [
              "volume"
            ],
            "colors": [
              "url(#colorEmerald)"
            ],
            "data": [
              {
                "name": "M1",
                "volume": 72
              },
              {
                "name": "M2",
                "volume": 24
              },
              {
                "name": "M3",
                "volume": 44
              },
              {
                "name": "M4",
                "volume": 47
              },
              {
                "name": "M5",
                "volume": 20
              },
              {
                "name": "M6",
                "volume": 25
              },
              {
                "name": "M7",
                "volume": 68
              }
            ]
          }
        ]
      },
      {
        "name": "Insights",
        "charts": [
          {
            "type": "AreaChart",
            "title": "Resource Utilization",
            "subtext": "Daily volume processed",
            "badge": "Live view",
            "dataKey": [
              "active"
            ],
            "colors": [
              "#818cf8"
            ],
            "data": [
              {
                "name": "M1",
                "active": 21
              },
              {
                "name": "M2",
                "active": 44
              },
              {
                "name": "M3",
                "active": 31
              },
              {
                "name": "M4",
                "active": 60
              },
              {
                "name": "M5",
                "active": 56
              },
              {
                "name": "M6",
                "active": 61
              },
              {
                "name": "M7",
                "active": 25
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Bottlenecks",
            "subtext": "SLA breaches and delays",
            "badge": "Live view",
            "dataKey": [
              "delays"
            ],
            "colors": [
              "url(#colorAmber)"
            ],
            "data": [
              {
                "name": "M1",
                "delays": 60
              },
              {
                "name": "M2",
                "delays": 71
              },
              {
                "name": "M3",
                "delays": 68
              },
              {
                "name": "M4",
                "delays": 45
              },
              {
                "name": "M5",
                "delays": 25
              },
              {
                "name": "M6",
                "delays": 35
              },
              {
                "name": "M7",
                "delays": 24
              }
            ]
          }
        ]
      },
      {
        "name": "Reports",
        "charts": [
          {
            "type": "LineChart",
            "title": "Quality Scores",
            "subtext": "Rolling compliance rate",
            "badge": "Live view",
            "dataKey": [
              "score"
            ],
            "colors": [
              "#34d399"
            ],
            "data": [
              {
                "name": "M1",
                "score": 24
              },
              {
                "name": "M2",
                "score": 69
              },
              {
                "name": "M3",
                "score": 46
              },
              {
                "name": "M4",
                "score": 40
              },
              {
                "name": "M5",
                "score": 26
              },
              {
                "name": "M6",
                "score": 59
              },
              {
                "name": "M7",
                "score": 62
              }
            ]
          },
          {
            "type": "AreaChart",
            "title": "Incident Reports",
            "subtext": "Monthly reported anomalies",
            "badge": "Live view",
            "dataKey": [
              "incidents"
            ],
            "colors": [
              "#f43f5e"
            ],
            "data": [
              {
                "name": "M1",
                "incidents": 45
              },
              {
                "name": "M2",
                "incidents": 33
              },
              {
                "name": "M3",
                "incidents": 57
              },
              {
                "name": "M4",
                "incidents": 47
              },
              {
                "name": "M5",
                "incidents": 58
              },
              {
                "name": "M6",
                "incidents": 51
              },
              {
                "name": "M7",
                "incidents": 44
              }
            ]
          }
        ]
      }
    ]
  },
  "Technology": {
    "title": "Technology Operations",
    "subtitle": "Interactive analytics and key metrics overview.",
    "theme": "fuchsia",
    "kpis": [
      {
        "title": "RISK SCORE",
        "value": "11/100",
        "change": "+0.2%",
        "subtext": "vs last mo",
        "icon": "Truck",
        "color": "amber"
      },
      {
        "title": "SYSTEM LOAD",
        "value": "62%",
        "change": "-1.2%",
        "subtext": "vs last wk",
        "icon": "Wrench",
        "color": "rose"
      },
      {
        "title": "THROUGHPUT",
        "value": "734 MB/s",
        "change": "+0.1%",
        "subtext": "vs target",
        "icon": "Activity",
        "color": "fuchsia"
      },
      {
        "title": "UPTIME",
        "value": "99.72%",
        "change": "+0.6%",
        "subtext": "yoy",
        "icon": "Box",
        "color": "cyan"
      }
    ],
    "tabs": [
      {
        "name": "Operations",
        "charts": [
          {
            "type": "LineChart",
            "title": "Technology Performance",
            "subtext": "Core metrics tracking",
            "badge": "Live view",
            "dataKey": [
              "primary",
              "secondary"
            ],
            "colors": [
              "#2dd4bf",
              "#fbbf24"
            ],
            "data": [
              {
                "name": "M1",
                "primary": 22,
                "secondary": 39
              },
              {
                "name": "M2",
                "primary": 40,
                "secondary": 49
              },
              {
                "name": "M3",
                "primary": 73,
                "secondary": 70
              },
              {
                "name": "M4",
                "primary": 56,
                "secondary": 88
              },
              {
                "name": "M5",
                "primary": 46,
                "secondary": 36
              },
              {
                "name": "M6",
                "primary": 73,
                "secondary": 75
              },
              {
                "name": "M7",
                "primary": 47,
                "secondary": 67
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Regional Distribution",
            "subtext": "Click a bar to focus (Top 7)",
            "badge": "Live view",
            "dataKey": [
              "volume"
            ],
            "colors": [
              "url(#colorEmerald)"
            ],
            "data": [
              {
                "name": "M1",
                "volume": 54
              },
              {
                "name": "M2",
                "volume": 49
              },
              {
                "name": "M3",
                "volume": 91
              },
              {
                "name": "M4",
                "volume": 73
              },
              {
                "name": "M5",
                "volume": 67
              },
              {
                "name": "M6",
                "volume": 69
              },
              {
                "name": "M7",
                "volume": 41
              }
            ]
          }
        ]
      },
      {
        "name": "Insights",
        "charts": [
          {
            "type": "AreaChart",
            "title": "Resource Utilization",
            "subtext": "Daily volume processed",
            "badge": "Live view",
            "dataKey": [
              "active"
            ],
            "colors": [
              "#818cf8"
            ],
            "data": [
              {
                "name": "M1",
                "active": 26
              },
              {
                "name": "M2",
                "active": 30
              },
              {
                "name": "M3",
                "active": 25
              },
              {
                "name": "M4",
                "active": 42
              },
              {
                "name": "M5",
                "active": 27
              },
              {
                "name": "M6",
                "active": 58
              },
              {
                "name": "M7",
                "active": 80
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Bottlenecks",
            "subtext": "SLA breaches and delays",
            "badge": "Live view",
            "dataKey": [
              "delays"
            ],
            "colors": [
              "url(#colorAmber)"
            ],
            "data": [
              {
                "name": "M1",
                "delays": 68
              },
              {
                "name": "M2",
                "delays": 48
              },
              {
                "name": "M3",
                "delays": 55
              },
              {
                "name": "M4",
                "delays": 70
              },
              {
                "name": "M5",
                "delays": 37
              },
              {
                "name": "M6",
                "delays": 38
              },
              {
                "name": "M7",
                "delays": 85
              }
            ]
          }
        ]
      },
      {
        "name": "Reports",
        "charts": [
          {
            "type": "LineChart",
            "title": "Quality Scores",
            "subtext": "Rolling compliance rate",
            "badge": "Live view",
            "dataKey": [
              "score"
            ],
            "colors": [
              "#34d399"
            ],
            "data": [
              {
                "name": "M1",
                "score": 76
              },
              {
                "name": "M2",
                "score": 37
              },
              {
                "name": "M3",
                "score": 55
              },
              {
                "name": "M4",
                "score": 73
              },
              {
                "name": "M5",
                "score": 41
              },
              {
                "name": "M6",
                "score": 66
              },
              {
                "name": "M7",
                "score": 31
              }
            ]
          },
          {
            "type": "AreaChart",
            "title": "Incident Reports",
            "subtext": "Monthly reported anomalies",
            "badge": "Live view",
            "dataKey": [
              "incidents"
            ],
            "colors": [
              "#f43f5e"
            ],
            "data": [
              {
                "name": "M1",
                "incidents": 73
              },
              {
                "name": "M2",
                "incidents": 72
              },
              {
                "name": "M3",
                "incidents": 79
              },
              {
                "name": "M4",
                "incidents": 27
              },
              {
                "name": "M5",
                "incidents": 31
              },
              {
                "name": "M6",
                "incidents": 81
              },
              {
                "name": "M7",
                "incidents": 65
              }
            ]
          }
        ]
      }
    ]
  },
  "Telecommunications": {
    "title": "Telecommunications Operations",
    "subtitle": "Interactive analytics and key metrics overview.",
    "theme": "emerald",
    "kpis": [
      {
        "title": "SYSTEM LOAD",
        "value": "53%",
        "change": "+1.7%",
        "subtext": "vs last mo",
        "icon": "Activity",
        "color": "rose"
      },
      {
        "title": "THROUGHPUT",
        "value": "703 MB/s",
        "change": "-1.7%",
        "subtext": "vs last wk",
        "icon": "Box",
        "color": "emerald"
      },
      {
        "title": "UPTIME",
        "value": "99.13%",
        "change": "+1.6%",
        "subtext": "vs target",
        "icon": "ShieldCheck",
        "color": "cyan"
      },
      {
        "title": "EFFICIENCY",
        "value": "88%",
        "change": "+0.9%",
        "subtext": "yoy",
        "icon": "Database",
        "color": "emerald"
      }
    ],
    "tabs": [
      {
        "name": "Insights",
        "charts": [
          {
            "type": "LineChart",
            "title": "Telecommunications Performance",
            "subtext": "Core metrics tracking",
            "badge": "Live view",
            "dataKey": [
              "primary",
              "secondary"
            ],
            "colors": [
              "#2dd4bf",
              "#fbbf24"
            ],
            "data": [
              {
                "name": "M1",
                "primary": 72,
                "secondary": 90
              },
              {
                "name": "M2",
                "primary": 62,
                "secondary": 47
              },
              {
                "name": "M3",
                "primary": 66,
                "secondary": 65
              },
              {
                "name": "M4",
                "primary": 52,
                "secondary": 40
              },
              {
                "name": "M5",
                "primary": 52,
                "secondary": 78
              },
              {
                "name": "M6",
                "primary": 74,
                "secondary": 86
              },
              {
                "name": "M7",
                "primary": 48,
                "secondary": 68
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Regional Distribution",
            "subtext": "Click a bar to focus (Top 7)",
            "badge": "Live view",
            "dataKey": [
              "volume"
            ],
            "colors": [
              "url(#colorEmerald)"
            ],
            "data": [
              {
                "name": "M1",
                "volume": 58
              },
              {
                "name": "M2",
                "volume": 29
              },
              {
                "name": "M3",
                "volume": 81
              },
              {
                "name": "M4",
                "volume": 71
              },
              {
                "name": "M5",
                "volume": 35
              },
              {
                "name": "M6",
                "volume": 22
              },
              {
                "name": "M7",
                "volume": 66
              }
            ]
          }
        ]
      },
      {
        "name": "Reports",
        "charts": [
          {
            "type": "AreaChart",
            "title": "Resource Utilization",
            "subtext": "Daily volume processed",
            "badge": "Live view",
            "dataKey": [
              "active"
            ],
            "colors": [
              "#818cf8"
            ],
            "data": [
              {
                "name": "M1",
                "active": 56
              },
              {
                "name": "M2",
                "active": 30
              },
              {
                "name": "M3",
                "active": 42
              },
              {
                "name": "M4",
                "active": 60
              },
              {
                "name": "M5",
                "active": 20
              },
              {
                "name": "M6",
                "active": 41
              },
              {
                "name": "M7",
                "active": 79
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Bottlenecks",
            "subtext": "SLA breaches and delays",
            "badge": "Live view",
            "dataKey": [
              "delays"
            ],
            "colors": [
              "url(#colorAmber)"
            ],
            "data": [
              {
                "name": "M1",
                "delays": 26
              },
              {
                "name": "M2",
                "delays": 58
              },
              {
                "name": "M3",
                "delays": 54
              },
              {
                "name": "M4",
                "delays": 22
              },
              {
                "name": "M5",
                "delays": 63
              },
              {
                "name": "M6",
                "delays": 69
              },
              {
                "name": "M7",
                "delays": 24
              }
            ]
          }
        ]
      },
      {
        "name": "Overview",
        "charts": [
          {
            "type": "LineChart",
            "title": "Quality Scores",
            "subtext": "Rolling compliance rate",
            "badge": "Live view",
            "dataKey": [
              "score"
            ],
            "colors": [
              "#34d399"
            ],
            "data": [
              {
                "name": "M1",
                "score": 45
              },
              {
                "name": "M2",
                "score": 82
              },
              {
                "name": "M3",
                "score": 34
              },
              {
                "name": "M4",
                "score": 64
              },
              {
                "name": "M5",
                "score": 24
              },
              {
                "name": "M6",
                "score": 82
              },
              {
                "name": "M7",
                "score": 34
              }
            ]
          },
          {
            "type": "AreaChart",
            "title": "Incident Reports",
            "subtext": "Monthly reported anomalies",
            "badge": "Live view",
            "dataKey": [
              "incidents"
            ],
            "colors": [
              "#f43f5e"
            ],
            "data": [
              {
                "name": "M1",
                "incidents": 33
              },
              {
                "name": "M2",
                "incidents": 66
              },
              {
                "name": "M3",
                "incidents": 65
              },
              {
                "name": "M4",
                "incidents": 37
              },
              {
                "name": "M5",
                "incidents": 29
              },
              {
                "name": "M6",
                "incidents": 81
              },
              {
                "name": "M7",
                "incidents": 80
              }
            ]
          }
        ]
      }
    ]
  },
  "Transportation": {
    "title": "Transportation Operations",
    "subtitle": "Interactive analytics and key metrics overview.",
    "theme": "amber",
    "kpis": [
      {
        "title": "RISK SCORE",
        "value": "7/100",
        "change": "+3.0%",
        "subtext": "vs last mo",
        "icon": "Truck",
        "color": "amber"
      },
      {
        "title": "SYSTEM LOAD",
        "value": "72%",
        "change": "-2.2%",
        "subtext": "vs last wk",
        "icon": "Wrench",
        "color": "rose"
      },
      {
        "title": "THROUGHPUT",
        "value": "850 MB/s",
        "change": "+1.6%",
        "subtext": "vs target",
        "icon": "Activity",
        "color": "amber"
      },
      {
        "title": "UPTIME",
        "value": "99.32%",
        "change": "+0.3%",
        "subtext": "yoy",
        "icon": "Box",
        "color": "cyan"
      }
    ],
    "tabs": [
      {
        "name": "Operations",
        "charts": [
          {
            "type": "LineChart",
            "title": "Transportation Performance",
            "subtext": "Core metrics tracking",
            "badge": "Live view",
            "dataKey": [
              "primary",
              "secondary"
            ],
            "colors": [
              "#2dd4bf",
              "#fbbf24"
            ],
            "data": [
              {
                "name": "M1",
                "primary": 97,
                "secondary": 76
              },
              {
                "name": "M2",
                "primary": 67,
                "secondary": 80
              },
              {
                "name": "M3",
                "primary": 29,
                "secondary": 55
              },
              {
                "name": "M4",
                "primary": 22,
                "secondary": 38
              },
              {
                "name": "M5",
                "primary": 78,
                "secondary": 80
              },
              {
                "name": "M6",
                "primary": 66,
                "secondary": 40
              },
              {
                "name": "M7",
                "primary": 70,
                "secondary": 98
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Regional Distribution",
            "subtext": "Click a bar to focus (Top 7)",
            "badge": "Live view",
            "dataKey": [
              "volume"
            ],
            "colors": [
              "url(#colorEmerald)"
            ],
            "data": [
              {
                "name": "M1",
                "volume": 43
              },
              {
                "name": "M2",
                "volume": 67
              },
              {
                "name": "M3",
                "volume": 26
              },
              {
                "name": "M4",
                "volume": 21
              },
              {
                "name": "M5",
                "volume": 57
              },
              {
                "name": "M6",
                "volume": 68
              },
              {
                "name": "M7",
                "volume": 51
              }
            ]
          }
        ]
      },
      {
        "name": "Insights",
        "charts": [
          {
            "type": "AreaChart",
            "title": "Resource Utilization",
            "subtext": "Daily volume processed",
            "badge": "Live view",
            "dataKey": [
              "active"
            ],
            "colors": [
              "#818cf8"
            ],
            "data": [
              {
                "name": "M1",
                "active": 53
              },
              {
                "name": "M2",
                "active": 86
              },
              {
                "name": "M3",
                "active": 35
              },
              {
                "name": "M4",
                "active": 54
              },
              {
                "name": "M5",
                "active": 90
              },
              {
                "name": "M6",
                "active": 70
              },
              {
                "name": "M7",
                "active": 75
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Bottlenecks",
            "subtext": "SLA breaches and delays",
            "badge": "Live view",
            "dataKey": [
              "delays"
            ],
            "colors": [
              "url(#colorAmber)"
            ],
            "data": [
              {
                "name": "M1",
                "delays": 39
              },
              {
                "name": "M2",
                "delays": 80
              },
              {
                "name": "M3",
                "delays": 27
              },
              {
                "name": "M4",
                "delays": 77
              },
              {
                "name": "M5",
                "delays": 49
              },
              {
                "name": "M6",
                "delays": 67
              },
              {
                "name": "M7",
                "delays": 92
              }
            ]
          }
        ]
      },
      {
        "name": "Reports",
        "charts": [
          {
            "type": "LineChart",
            "title": "Quality Scores",
            "subtext": "Rolling compliance rate",
            "badge": "Live view",
            "dataKey": [
              "score"
            ],
            "colors": [
              "#34d399"
            ],
            "data": [
              {
                "name": "M1",
                "score": 74
              },
              {
                "name": "M2",
                "score": 101
              },
              {
                "name": "M3",
                "score": 67
              },
              {
                "name": "M4",
                "score": 46
              },
              {
                "name": "M5",
                "score": 47
              },
              {
                "name": "M6",
                "score": 79
              },
              {
                "name": "M7",
                "score": 77
              }
            ]
          },
          {
            "type": "AreaChart",
            "title": "Incident Reports",
            "subtext": "Monthly reported anomalies",
            "badge": "Live view",
            "dataKey": [
              "incidents"
            ],
            "colors": [
              "#f43f5e"
            ],
            "data": [
              {
                "name": "M1",
                "incidents": 35
              },
              {
                "name": "M2",
                "incidents": 61
              },
              {
                "name": "M3",
                "incidents": 75
              },
              {
                "name": "M4",
                "incidents": 68
              },
              {
                "name": "M5",
                "incidents": 56
              },
              {
                "name": "M6",
                "incidents": 35
              },
              {
                "name": "M7",
                "incidents": 61
              }
            ]
          }
        ]
      }
    ]
  },
  "FmcgFastMovingConsumerGoods": {
    "title": "FMCG Command Center",
    "subtitle": "High-velocity sales tracking, demand forecasting, and stock management.",
    "theme": "amber",
    "kpis": [
      {
        "title": "WEEKLY REVENUE",
        "value": "$104K",
        "change": "↗ 4.2%",
        "subtext": "vs wk",
        "icon": "Activity",
        "color": "amber"
      },
      {
        "title": "UNITS SOLD",
        "value": "12,450",
        "change": "↗ 2.8%",
        "subtext": "vs wk",
        "icon": "Box",
        "color": "rose"
      },
      {
        "title": "INV. TURNOVER",
        "value": "12.5x",
        "change": "↘ 1.1%",
        "subtext": "vs Qtr",
        "icon": "Activity",
        "color": "amber"
      },
      {
        "title": "ORDER FILL RATE",
        "value": "94.2%",
        "change": "↗ 0.5%",
        "subtext": "vs wk",
        "icon": "Box",
        "color": "indigo"
      }
    ],
    "tabs": [
      {
        "name": "Overview",
        "charts": [
          {
            "type": "BarChart",
            "title": "Sales Performance",
            "subtext": "Weekly Revenue vs Target",
            "badge": "Live view",
            "dataKey": [
              "revenue"
            ],
            "colors": [
              "url(#colorAmber)"
            ],
            "data": [
              {
                "name": "M1",
                "revenue": 76
              },
              {
                "name": "M2",
                "revenue": 22
              },
              {
                "name": "M3",
                "revenue": 93
              },
              {
                "name": "M4",
                "revenue": 58
              },
              {
                "name": "M5",
                "revenue": 42
              },
              {
                "name": "M6",
                "revenue": 76
              },
              {
                "name": "M7",
                "revenue": 64
              }
            ]
          },
          {
            "type": "LineChart",
            "title": "Inventory Alerts",
            "subtext": "Real-time Stock Levels",
            "badge": "Live view",
            "dataKey": [
              "stock"
            ],
            "colors": [
              "#f59e0b",
              "#ef4444"
            ],
            "data": [
              {
                "name": "M1",
                "stock": 82
              },
              {
                "name": "M2",
                "stock": 68
              },
              {
                "name": "M3",
                "stock": 57
              },
              {
                "name": "M4",
                "stock": 28
              },
              {
                "name": "M5",
                "stock": 21
              },
              {
                "name": "M6",
                "stock": 52
              },
              {
                "name": "M7",
                "stock": 27
              }
            ]
          }
        ]
      },
      {
        "name": "Sales Data",
        "charts": [
          {
            "type": "AreaChart",
            "title": "Sales Velocity",
            "subtext": "Units cleared per day",
            "badge": "Live view",
            "dataKey": [
              "sales"
            ],
            "colors": [
              "#fbbf24"
            ],
            "data": [
              {
                "name": "M1",
                "sales": 24
              },
              {
                "name": "M2",
                "sales": 92
              },
              {
                "name": "M3",
                "sales": 90
              },
              {
                "name": "M4",
                "sales": 94
              },
              {
                "name": "M5",
                "sales": 88
              },
              {
                "name": "M6",
                "sales": 86
              },
              {
                "name": "M7",
                "sales": 56
              }
            ]
          }
        ]
      },
      {
        "name": "Inventory",
        "charts": [
          {
            "type": "BarChart",
            "title": "Stockouts",
            "subtext": "SKUs out of stock",
            "badge": "Live view",
            "dataKey": [
              "stockout"
            ],
            "colors": [
              "url(#colorRose)"
            ],
            "data": [
              {
                "name": "M1",
                "stockout": 22
              },
              {
                "name": "M2",
                "stockout": 76
              },
              {
                "name": "M3",
                "stockout": 93
              },
              {
                "name": "M4",
                "stockout": 80
              },
              {
                "name": "M5",
                "stockout": 89
              },
              {
                "name": "M6",
                "stockout": 35
              },
              {
                "name": "M7",
                "stockout": 31
              }
            ]
          }
        ]
      }
    ]
  },
  "LogisticsAndSupplyChain": {
    "title": "Logistics And Supply Chain Operations",
    "subtitle": "Interactive analytics and key metrics overview.",
    "theme": "indigo",
    "kpis": [
      {
        "title": "EFFICIENCY",
        "value": "77%",
        "change": "+2.0%",
        "subtext": "vs last mo",
        "icon": "Activity",
        "color": "indigo"
      },
      {
        "title": "PROCESSING",
        "value": "12k/hr",
        "change": "-1.8%",
        "subtext": "vs last wk",
        "icon": "Box",
        "color": "emerald"
      },
      {
        "title": "RISK SCORE",
        "value": "5/100",
        "change": "+1.2%",
        "subtext": "vs target",
        "icon": "ShieldCheck",
        "color": "amber"
      },
      {
        "title": "SYSTEM LOAD",
        "value": "72%",
        "change": "+0.2%",
        "subtext": "yoy",
        "icon": "Database",
        "color": "rose"
      }
    ],
    "tabs": [
      {
        "name": "Operations",
        "charts": [
          {
            "type": "LineChart",
            "title": "LogisticsAndSupplyChain Performance",
            "subtext": "Core metrics tracking",
            "badge": "Live view",
            "dataKey": [
              "primary",
              "secondary"
            ],
            "colors": [
              "#2dd4bf",
              "#fbbf24"
            ],
            "data": [
              {
                "name": "M1",
                "primary": 96,
                "secondary": 90
              },
              {
                "name": "M2",
                "primary": 25,
                "secondary": 111
              },
              {
                "name": "M3",
                "primary": 67,
                "secondary": 32
              },
              {
                "name": "M4",
                "primary": 97,
                "secondary": 46
              },
              {
                "name": "M5",
                "primary": 78,
                "secondary": 71
              },
              {
                "name": "M6",
                "primary": 75,
                "secondary": 94
              },
              {
                "name": "M7",
                "primary": 43,
                "secondary": 90
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Regional Distribution",
            "subtext": "Click a bar to focus (Top 7)",
            "badge": "Live view",
            "dataKey": [
              "volume"
            ],
            "colors": [
              "url(#colorEmerald)"
            ],
            "data": [
              {
                "name": "M1",
                "volume": 27
              },
              {
                "name": "M2",
                "volume": 97
              },
              {
                "name": "M3",
                "volume": 80
              },
              {
                "name": "M4",
                "volume": 45
              },
              {
                "name": "M5",
                "volume": 101
              },
              {
                "name": "M6",
                "volume": 23
              },
              {
                "name": "M7",
                "volume": 62
              }
            ]
          }
        ]
      },
      {
        "name": "Insights",
        "charts": [
          {
            "type": "AreaChart",
            "title": "Resource Utilization",
            "subtext": "Daily volume processed",
            "badge": "Live view",
            "dataKey": [
              "active"
            ],
            "colors": [
              "#818cf8"
            ],
            "data": [
              {
                "name": "M1",
                "active": 64
              },
              {
                "name": "M2",
                "active": 24
              },
              {
                "name": "M3",
                "active": 100
              },
              {
                "name": "M4",
                "active": 101
              },
              {
                "name": "M5",
                "active": 57
              },
              {
                "name": "M6",
                "active": 97
              },
              {
                "name": "M7",
                "active": 46
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Bottlenecks",
            "subtext": "SLA breaches and delays",
            "badge": "Live view",
            "dataKey": [
              "delays"
            ],
            "colors": [
              "url(#colorAmber)"
            ],
            "data": [
              {
                "name": "M1",
                "delays": 77
              },
              {
                "name": "M2",
                "delays": 22
              },
              {
                "name": "M3",
                "delays": 92
              },
              {
                "name": "M4",
                "delays": 98
              },
              {
                "name": "M5",
                "delays": 99
              },
              {
                "name": "M6",
                "delays": 58
              },
              {
                "name": "M7",
                "delays": 59
              }
            ]
          }
        ]
      },
      {
        "name": "Reports",
        "charts": [
          {
            "type": "LineChart",
            "title": "Quality Scores",
            "subtext": "Rolling compliance rate",
            "badge": "Live view",
            "dataKey": [
              "score"
            ],
            "colors": [
              "#34d399"
            ],
            "data": [
              {
                "name": "M1",
                "score": 70
              },
              {
                "name": "M2",
                "score": 86
              },
              {
                "name": "M3",
                "score": 29
              },
              {
                "name": "M4",
                "score": 34
              },
              {
                "name": "M5",
                "score": 66
              },
              {
                "name": "M6",
                "score": 93
              },
              {
                "name": "M7",
                "score": 84
              }
            ]
          },
          {
            "type": "AreaChart",
            "title": "Incident Reports",
            "subtext": "Monthly reported anomalies",
            "badge": "Live view",
            "dataKey": [
              "incidents"
            ],
            "colors": [
              "#f43f5e"
            ],
            "data": [
              {
                "name": "M1",
                "incidents": 77
              },
              {
                "name": "M2",
                "incidents": 82
              },
              {
                "name": "M3",
                "incidents": 32
              },
              {
                "name": "M4",
                "incidents": 81
              },
              {
                "name": "M5",
                "incidents": 51
              },
              {
                "name": "M6",
                "incidents": 92
              },
              {
                "name": "M7",
                "incidents": 84
              }
            ]
          }
        ]
      }
    ]
  },
  "MiningAndNaturalResources": {
    "title": "Mining And Natural Resources Operations",
    "subtitle": "Interactive analytics and key metrics overview.",
    "theme": "cyan",
    "kpis": [
      {
        "title": "PROCESSING",
        "value": "39k/hr",
        "change": "+2.1%",
        "subtext": "vs last mo",
        "icon": "ShieldCheck",
        "color": "emerald"
      },
      {
        "title": "RISK SCORE",
        "value": "2/100",
        "change": "-0.9%",
        "subtext": "vs last wk",
        "icon": "Database",
        "color": "amber"
      },
      {
        "title": "SYSTEM LOAD",
        "value": "79%",
        "change": "+0.5%",
        "subtext": "vs target",
        "icon": "Truck",
        "color": "rose"
      },
      {
        "title": "THROUGHPUT",
        "value": "741 MB/s",
        "change": "+0.0%",
        "subtext": "yoy",
        "icon": "Wrench",
        "color": "cyan"
      }
    ],
    "tabs": [
      {
        "name": "Reports",
        "charts": [
          {
            "type": "LineChart",
            "title": "MiningAndNaturalResources Performance",
            "subtext": "Core metrics tracking",
            "badge": "Live view",
            "dataKey": [
              "primary",
              "secondary"
            ],
            "colors": [
              "#2dd4bf",
              "#fbbf24"
            ],
            "data": [
              {
                "name": "M1",
                "primary": 37,
                "secondary": 44
              },
              {
                "name": "M2",
                "primary": 39,
                "secondary": 61
              },
              {
                "name": "M3",
                "primary": 55,
                "secondary": 100
              },
              {
                "name": "M4",
                "primary": 44,
                "secondary": 95
              },
              {
                "name": "M5",
                "primary": 101,
                "secondary": 51
              },
              {
                "name": "M6",
                "primary": 75,
                "secondary": 114
              },
              {
                "name": "M7",
                "primary": 30,
                "secondary": 57
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Regional Distribution",
            "subtext": "Click a bar to focus (Top 7)",
            "badge": "Live view",
            "dataKey": [
              "volume"
            ],
            "colors": [
              "url(#colorEmerald)"
            ],
            "data": [
              {
                "name": "M1",
                "volume": 42
              },
              {
                "name": "M2",
                "volume": 30
              },
              {
                "name": "M3",
                "volume": 58
              },
              {
                "name": "M4",
                "volume": 35
              },
              {
                "name": "M5",
                "volume": 67
              },
              {
                "name": "M6",
                "volume": 60
              },
              {
                "name": "M7",
                "volume": 21
              }
            ]
          }
        ]
      },
      {
        "name": "Overview",
        "charts": [
          {
            "type": "AreaChart",
            "title": "Resource Utilization",
            "subtext": "Daily volume processed",
            "badge": "Live view",
            "dataKey": [
              "active"
            ],
            "colors": [
              "#818cf8"
            ],
            "data": [
              {
                "name": "M1",
                "active": 70
              },
              {
                "name": "M2",
                "active": 47
              },
              {
                "name": "M3",
                "active": 106
              },
              {
                "name": "M4",
                "active": 42
              },
              {
                "name": "M5",
                "active": 33
              },
              {
                "name": "M6",
                "active": 44
              },
              {
                "name": "M7",
                "active": 97
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Bottlenecks",
            "subtext": "SLA breaches and delays",
            "badge": "Live view",
            "dataKey": [
              "delays"
            ],
            "colors": [
              "url(#colorAmber)"
            ],
            "data": [
              {
                "name": "M1",
                "delays": 81
              },
              {
                "name": "M2",
                "delays": 40
              },
              {
                "name": "M3",
                "delays": 82
              },
              {
                "name": "M4",
                "delays": 81
              },
              {
                "name": "M5",
                "delays": 61
              },
              {
                "name": "M6",
                "delays": 87
              },
              {
                "name": "M7",
                "delays": 41
              }
            ]
          }
        ]
      },
      {
        "name": "Analytics",
        "charts": [
          {
            "type": "LineChart",
            "title": "Quality Scores",
            "subtext": "Rolling compliance rate",
            "badge": "Live view",
            "dataKey": [
              "score"
            ],
            "colors": [
              "#34d399"
            ],
            "data": [
              {
                "name": "M1",
                "score": 26
              },
              {
                "name": "M2",
                "score": 83
              },
              {
                "name": "M3",
                "score": 101
              },
              {
                "name": "M4",
                "score": 58
              },
              {
                "name": "M5",
                "score": 88
              },
              {
                "name": "M6",
                "score": 38
              },
              {
                "name": "M7",
                "score": 78
              }
            ]
          },
          {
            "type": "AreaChart",
            "title": "Incident Reports",
            "subtext": "Monthly reported anomalies",
            "badge": "Live view",
            "dataKey": [
              "incidents"
            ],
            "colors": [
              "#f43f5e"
            ],
            "data": [
              {
                "name": "M1",
                "incidents": 95
              },
              {
                "name": "M2",
                "incidents": 45
              },
              {
                "name": "M3",
                "incidents": 94
              },
              {
                "name": "M4",
                "incidents": 37
              },
              {
                "name": "M5",
                "incidents": 94
              },
              {
                "name": "M6",
                "incidents": 74
              },
              {
                "name": "M7",
                "incidents": 99
              }
            ]
          }
        ]
      }
    ]
  },
  "NonprofitAndNgos": {
    "title": "Nonprofit And Ngos Operations",
    "subtitle": "Interactive analytics and key metrics overview.",
    "theme": "fuchsia",
    "kpis": [
      {
        "title": "UPTIME",
        "value": "99.61%",
        "change": "+2.6%",
        "subtext": "vs last mo",
        "icon": "Truck",
        "color": "cyan"
      },
      {
        "title": "EFFICIENCY",
        "value": "76%",
        "change": "-0.0%",
        "subtext": "vs last wk",
        "icon": "Wrench",
        "color": "fuchsia"
      },
      {
        "title": "PROCESSING",
        "value": "31k/hr",
        "change": "+0.9%",
        "subtext": "vs target",
        "icon": "Activity",
        "color": "emerald"
      },
      {
        "title": "RISK SCORE",
        "value": "14/100",
        "change": "+0.9%",
        "subtext": "yoy",
        "icon": "Box",
        "color": "amber"
      }
    ],
    "tabs": [
      {
        "name": "Analytics",
        "charts": [
          {
            "type": "LineChart",
            "title": "NonprofitAndNgos Performance",
            "subtext": "Core metrics tracking",
            "badge": "Live view",
            "dataKey": [
              "primary",
              "secondary"
            ],
            "colors": [
              "#2dd4bf",
              "#fbbf24"
            ],
            "data": [
              {
                "name": "M1",
                "primary": 33,
                "secondary": 48
              },
              {
                "name": "M2",
                "primary": 37,
                "secondary": 52
              },
              {
                "name": "M3",
                "primary": 24,
                "secondary": 84
              },
              {
                "name": "M4",
                "primary": 70,
                "secondary": 45
              },
              {
                "name": "M5",
                "primary": 72,
                "secondary": 32
              },
              {
                "name": "M6",
                "primary": 58,
                "secondary": 41
              },
              {
                "name": "M7",
                "primary": 58,
                "secondary": 81
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Regional Distribution",
            "subtext": "Click a bar to focus (Top 7)",
            "badge": "Live view",
            "dataKey": [
              "volume"
            ],
            "colors": [
              "url(#colorEmerald)"
            ],
            "data": [
              {
                "name": "M1",
                "volume": 33
              },
              {
                "name": "M2",
                "volume": 59
              },
              {
                "name": "M3",
                "volume": 27
              },
              {
                "name": "M4",
                "volume": 78
              },
              {
                "name": "M5",
                "volume": 53
              },
              {
                "name": "M6",
                "volume": 27
              },
              {
                "name": "M7",
                "volume": 20
              }
            ]
          }
        ]
      },
      {
        "name": "Operations",
        "charts": [
          {
            "type": "AreaChart",
            "title": "Resource Utilization",
            "subtext": "Daily volume processed",
            "badge": "Live view",
            "dataKey": [
              "active"
            ],
            "colors": [
              "#818cf8"
            ],
            "data": [
              {
                "name": "M1",
                "active": 71
              },
              {
                "name": "M2",
                "active": 53
              },
              {
                "name": "M3",
                "active": 65
              },
              {
                "name": "M4",
                "active": 54
              },
              {
                "name": "M5",
                "active": 75
              },
              {
                "name": "M6",
                "active": 61
              },
              {
                "name": "M7",
                "active": 59
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Bottlenecks",
            "subtext": "SLA breaches and delays",
            "badge": "Live view",
            "dataKey": [
              "delays"
            ],
            "colors": [
              "url(#colorAmber)"
            ],
            "data": [
              {
                "name": "M1",
                "delays": 28
              },
              {
                "name": "M2",
                "delays": 65
              },
              {
                "name": "M3",
                "delays": 31
              },
              {
                "name": "M4",
                "delays": 75
              },
              {
                "name": "M5",
                "delays": 54
              },
              {
                "name": "M6",
                "delays": 62
              },
              {
                "name": "M7",
                "delays": 77
              }
            ]
          }
        ]
      },
      {
        "name": "Insights",
        "charts": [
          {
            "type": "LineChart",
            "title": "Quality Scores",
            "subtext": "Rolling compliance rate",
            "badge": "Live view",
            "dataKey": [
              "score"
            ],
            "colors": [
              "#34d399"
            ],
            "data": [
              {
                "name": "M1",
                "score": 55
              },
              {
                "name": "M2",
                "score": 61
              },
              {
                "name": "M3",
                "score": 34
              },
              {
                "name": "M4",
                "score": 58
              },
              {
                "name": "M5",
                "score": 58
              },
              {
                "name": "M6",
                "score": 21
              },
              {
                "name": "M7",
                "score": 44
              }
            ]
          },
          {
            "type": "AreaChart",
            "title": "Incident Reports",
            "subtext": "Monthly reported anomalies",
            "badge": "Live view",
            "dataKey": [
              "incidents"
            ],
            "colors": [
              "#f43f5e"
            ],
            "data": [
              {
                "name": "M1",
                "incidents": 44
              },
              {
                "name": "M2",
                "incidents": 48
              },
              {
                "name": "M3",
                "incidents": 44
              },
              {
                "name": "M4",
                "incidents": 38
              },
              {
                "name": "M5",
                "incidents": 47
              },
              {
                "name": "M6",
                "incidents": 45
              },
              {
                "name": "M7",
                "incidents": 58
              }
            ]
          }
        ]
      }
    ]
  },
  "Pharmaceuticals": {
    "title": "Pharmaceuticals Operations",
    "subtitle": "Interactive analytics and key metrics overview.",
    "theme": "emerald",
    "kpis": [
      {
        "title": "EFFICIENCY",
        "value": "91%",
        "change": "+1.2%",
        "subtext": "vs last mo",
        "icon": "Activity",
        "color": "emerald"
      },
      {
        "title": "PROCESSING",
        "value": "26k/hr",
        "change": "-0.2%",
        "subtext": "vs last wk",
        "icon": "Box",
        "color": "emerald"
      },
      {
        "title": "RISK SCORE",
        "value": "1/100",
        "change": "+0.3%",
        "subtext": "vs target",
        "icon": "ShieldCheck",
        "color": "amber"
      },
      {
        "title": "SYSTEM LOAD",
        "value": "66%",
        "change": "+0.5%",
        "subtext": "yoy",
        "icon": "Database",
        "color": "rose"
      }
    ],
    "tabs": [
      {
        "name": "Analytics",
        "charts": [
          {
            "type": "LineChart",
            "title": "Pharmaceuticals Performance",
            "subtext": "Core metrics tracking",
            "badge": "Live view",
            "dataKey": [
              "primary",
              "secondary"
            ],
            "colors": [
              "#2dd4bf",
              "#fbbf24"
            ],
            "data": [
              {
                "name": "M1",
                "primary": 88,
                "secondary": 90
              },
              {
                "name": "M2",
                "primary": 92,
                "secondary": 100
              },
              {
                "name": "M3",
                "primary": 91,
                "secondary": 98
              },
              {
                "name": "M4",
                "primary": 72,
                "secondary": 73
              },
              {
                "name": "M5",
                "primary": 67,
                "secondary": 46
              },
              {
                "name": "M6",
                "primary": 80,
                "secondary": 86
              },
              {
                "name": "M7",
                "primary": 22,
                "secondary": 59
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Regional Distribution",
            "subtext": "Click a bar to focus (Top 7)",
            "badge": "Live view",
            "dataKey": [
              "volume"
            ],
            "colors": [
              "url(#colorEmerald)"
            ],
            "data": [
              {
                "name": "M1",
                "volume": 68
              },
              {
                "name": "M2",
                "volume": 41
              },
              {
                "name": "M3",
                "volume": 59
              },
              {
                "name": "M4",
                "volume": 55
              },
              {
                "name": "M5",
                "volume": 24
              },
              {
                "name": "M6",
                "volume": 54
              },
              {
                "name": "M7",
                "volume": 39
              }
            ]
          }
        ]
      },
      {
        "name": "Operations",
        "charts": [
          {
            "type": "AreaChart",
            "title": "Resource Utilization",
            "subtext": "Daily volume processed",
            "badge": "Live view",
            "dataKey": [
              "active"
            ],
            "colors": [
              "#818cf8"
            ],
            "data": [
              {
                "name": "M1",
                "active": 22
              },
              {
                "name": "M2",
                "active": 62
              },
              {
                "name": "M3",
                "active": 58
              },
              {
                "name": "M4",
                "active": 70
              },
              {
                "name": "M5",
                "active": 91
              },
              {
                "name": "M6",
                "active": 63
              },
              {
                "name": "M7",
                "active": 48
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Bottlenecks",
            "subtext": "SLA breaches and delays",
            "badge": "Live view",
            "dataKey": [
              "delays"
            ],
            "colors": [
              "url(#colorAmber)"
            ],
            "data": [
              {
                "name": "M1",
                "delays": 67
              },
              {
                "name": "M2",
                "delays": 23
              },
              {
                "name": "M3",
                "delays": 26
              },
              {
                "name": "M4",
                "delays": 49
              },
              {
                "name": "M5",
                "delays": 94
              },
              {
                "name": "M6",
                "delays": 88
              },
              {
                "name": "M7",
                "delays": 89
              }
            ]
          }
        ]
      },
      {
        "name": "Insights",
        "charts": [
          {
            "type": "LineChart",
            "title": "Quality Scores",
            "subtext": "Rolling compliance rate",
            "badge": "Live view",
            "dataKey": [
              "score"
            ],
            "colors": [
              "#34d399"
            ],
            "data": [
              {
                "name": "M1",
                "score": 35
              },
              {
                "name": "M2",
                "score": 38
              },
              {
                "name": "M3",
                "score": 37
              },
              {
                "name": "M4",
                "score": 85
              },
              {
                "name": "M5",
                "score": 64
              },
              {
                "name": "M6",
                "score": 24
              },
              {
                "name": "M7",
                "score": 23
              }
            ]
          },
          {
            "type": "AreaChart",
            "title": "Incident Reports",
            "subtext": "Monthly reported anomalies",
            "badge": "Live view",
            "dataKey": [
              "incidents"
            ],
            "colors": [
              "#f43f5e"
            ],
            "data": [
              {
                "name": "M1",
                "incidents": 84
              },
              {
                "name": "M2",
                "incidents": 47
              },
              {
                "name": "M3",
                "incidents": 84
              },
              {
                "name": "M4",
                "incidents": 23
              },
              {
                "name": "M5",
                "incidents": 73
              },
              {
                "name": "M6",
                "incidents": 57
              },
              {
                "name": "M7",
                "incidents": 38
              }
            ]
          }
        ]
      }
    ]
  },
  "ProfessionalServices": {
    "title": "Professional Services Operations",
    "subtitle": "Interactive analytics and key metrics overview.",
    "theme": "amber",
    "kpis": [
      {
        "title": "PROCESSING",
        "value": "29k/hr",
        "change": "+0.4%",
        "subtext": "vs last mo",
        "icon": "ShieldCheck",
        "color": "emerald"
      },
      {
        "title": "RISK SCORE",
        "value": "6/100",
        "change": "-1.0%",
        "subtext": "vs last wk",
        "icon": "Database",
        "color": "amber"
      },
      {
        "title": "SYSTEM LOAD",
        "value": "89%",
        "change": "+1.1%",
        "subtext": "vs target",
        "icon": "Truck",
        "color": "rose"
      },
      {
        "title": "THROUGHPUT",
        "value": "854 MB/s",
        "change": "+0.7%",
        "subtext": "yoy",
        "icon": "Wrench",
        "color": "amber"
      }
    ],
    "tabs": [
      {
        "name": "Reports",
        "charts": [
          {
            "type": "LineChart",
            "title": "ProfessionalServices Performance",
            "subtext": "Core metrics tracking",
            "badge": "Live view",
            "dataKey": [
              "primary",
              "secondary"
            ],
            "colors": [
              "#2dd4bf",
              "#fbbf24"
            ],
            "data": [
              {
                "name": "M1",
                "primary": 67,
                "secondary": 74
              },
              {
                "name": "M2",
                "primary": 61,
                "secondary": 52
              },
              {
                "name": "M3",
                "primary": 105,
                "secondary": 40
              },
              {
                "name": "M4",
                "primary": 118,
                "secondary": 67
              },
              {
                "name": "M5",
                "primary": 53,
                "secondary": 82
              },
              {
                "name": "M6",
                "primary": 62,
                "secondary": 127
              },
              {
                "name": "M7",
                "primary": 93,
                "secondary": 111
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Regional Distribution",
            "subtext": "Click a bar to focus (Top 7)",
            "badge": "Live view",
            "dataKey": [
              "volume"
            ],
            "colors": [
              "url(#colorEmerald)"
            ],
            "data": [
              {
                "name": "M1",
                "volume": 74
              },
              {
                "name": "M2",
                "volume": 32
              },
              {
                "name": "M3",
                "volume": 40
              },
              {
                "name": "M4",
                "volume": 111
              },
              {
                "name": "M5",
                "volume": 45
              },
              {
                "name": "M6",
                "volume": 114
              },
              {
                "name": "M7",
                "volume": 80
              }
            ]
          }
        ]
      },
      {
        "name": "Overview",
        "charts": [
          {
            "type": "AreaChart",
            "title": "Resource Utilization",
            "subtext": "Daily volume processed",
            "badge": "Live view",
            "dataKey": [
              "active"
            ],
            "colors": [
              "#818cf8"
            ],
            "data": [
              {
                "name": "M1",
                "active": 77
              },
              {
                "name": "M2",
                "active": 76
              },
              {
                "name": "M3",
                "active": 48
              },
              {
                "name": "M4",
                "active": 34
              },
              {
                "name": "M5",
                "active": 110
              },
              {
                "name": "M6",
                "active": 90
              },
              {
                "name": "M7",
                "active": 81
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Bottlenecks",
            "subtext": "SLA breaches and delays",
            "badge": "Live view",
            "dataKey": [
              "delays"
            ],
            "colors": [
              "url(#colorAmber)"
            ],
            "data": [
              {
                "name": "M1",
                "delays": 82
              },
              {
                "name": "M2",
                "delays": 55
              },
              {
                "name": "M3",
                "delays": 101
              },
              {
                "name": "M4",
                "delays": 100
              },
              {
                "name": "M5",
                "delays": 20
              },
              {
                "name": "M6",
                "delays": 84
              },
              {
                "name": "M7",
                "delays": 48
              }
            ]
          }
        ]
      },
      {
        "name": "Analytics",
        "charts": [
          {
            "type": "LineChart",
            "title": "Quality Scores",
            "subtext": "Rolling compliance rate",
            "badge": "Live view",
            "dataKey": [
              "score"
            ],
            "colors": [
              "#34d399"
            ],
            "data": [
              {
                "name": "M1",
                "score": 26
              },
              {
                "name": "M2",
                "score": 65
              },
              {
                "name": "M3",
                "score": 58
              },
              {
                "name": "M4",
                "score": 107
              },
              {
                "name": "M5",
                "score": 27
              },
              {
                "name": "M6",
                "score": 66
              },
              {
                "name": "M7",
                "score": 80
              }
            ]
          },
          {
            "type": "AreaChart",
            "title": "Incident Reports",
            "subtext": "Monthly reported anomalies",
            "badge": "Live view",
            "dataKey": [
              "incidents"
            ],
            "colors": [
              "#f43f5e"
            ],
            "data": [
              {
                "name": "M1",
                "incidents": 115
              },
              {
                "name": "M2",
                "incidents": 44
              },
              {
                "name": "M3",
                "incidents": 35
              },
              {
                "name": "M4",
                "incidents": 69
              },
              {
                "name": "M5",
                "incidents": 67
              },
              {
                "name": "M6",
                "incidents": 36
              },
              {
                "name": "M7",
                "incidents": 92
              }
            ]
          }
        ]
      }
    ]
  },
  "SportsAndRecreation": {
    "title": "Sports And Recreation Operations",
    "subtitle": "Interactive analytics and key metrics overview.",
    "theme": "rose",
    "kpis": [
      {
        "title": "EFFICIENCY",
        "value": "77%",
        "change": "+0.6%",
        "subtext": "vs last mo",
        "icon": "Activity",
        "color": "rose"
      },
      {
        "title": "PROCESSING",
        "value": "32k/hr",
        "change": "-2.3%",
        "subtext": "vs last wk",
        "icon": "Box",
        "color": "emerald"
      },
      {
        "title": "RISK SCORE",
        "value": "11/100",
        "change": "+1.4%",
        "subtext": "vs target",
        "icon": "ShieldCheck",
        "color": "amber"
      },
      {
        "title": "SYSTEM LOAD",
        "value": "72%",
        "change": "+1.0%",
        "subtext": "yoy",
        "icon": "Database",
        "color": "rose"
      }
    ],
    "tabs": [
      {
        "name": "Operations",
        "charts": [
          {
            "type": "LineChart",
            "title": "SportsAndRecreation Performance",
            "subtext": "Core metrics tracking",
            "badge": "Live view",
            "dataKey": [
              "primary",
              "secondary"
            ],
            "colors": [
              "#2dd4bf",
              "#fbbf24"
            ],
            "data": [
              {
                "name": "M1",
                "primary": 25,
                "secondary": 41
              },
              {
                "name": "M2",
                "primary": 86,
                "secondary": 33
              },
              {
                "name": "M3",
                "primary": 31,
                "secondary": 48
              },
              {
                "name": "M4",
                "primary": 20,
                "secondary": 78
              },
              {
                "name": "M5",
                "primary": 62,
                "secondary": 78
              },
              {
                "name": "M6",
                "primary": 60,
                "secondary": 38
              },
              {
                "name": "M7",
                "primary": 38,
                "secondary": 100
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Regional Distribution",
            "subtext": "Click a bar to focus (Top 7)",
            "badge": "Live view",
            "dataKey": [
              "volume"
            ],
            "colors": [
              "url(#colorEmerald)"
            ],
            "data": [
              {
                "name": "M1",
                "volume": 35
              },
              {
                "name": "M2",
                "volume": 23
              },
              {
                "name": "M3",
                "volume": 93
              },
              {
                "name": "M4",
                "volume": 30
              },
              {
                "name": "M5",
                "volume": 35
              },
              {
                "name": "M6",
                "volume": 38
              },
              {
                "name": "M7",
                "volume": 60
              }
            ]
          }
        ]
      },
      {
        "name": "Insights",
        "charts": [
          {
            "type": "AreaChart",
            "title": "Resource Utilization",
            "subtext": "Daily volume processed",
            "badge": "Live view",
            "dataKey": [
              "active"
            ],
            "colors": [
              "#818cf8"
            ],
            "data": [
              {
                "name": "M1",
                "active": 22
              },
              {
                "name": "M2",
                "active": 98
              },
              {
                "name": "M3",
                "active": 85
              },
              {
                "name": "M4",
                "active": 40
              },
              {
                "name": "M5",
                "active": 47
              },
              {
                "name": "M6",
                "active": 27
              },
              {
                "name": "M7",
                "active": 55
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Bottlenecks",
            "subtext": "SLA breaches and delays",
            "badge": "Live view",
            "dataKey": [
              "delays"
            ],
            "colors": [
              "url(#colorAmber)"
            ],
            "data": [
              {
                "name": "M1",
                "delays": 54
              },
              {
                "name": "M2",
                "delays": 70
              },
              {
                "name": "M3",
                "delays": 65
              },
              {
                "name": "M4",
                "delays": 73
              },
              {
                "name": "M5",
                "delays": 54
              },
              {
                "name": "M6",
                "delays": 72
              },
              {
                "name": "M7",
                "delays": 92
              }
            ]
          }
        ]
      },
      {
        "name": "Reports",
        "charts": [
          {
            "type": "LineChart",
            "title": "Quality Scores",
            "subtext": "Rolling compliance rate",
            "badge": "Live view",
            "dataKey": [
              "score"
            ],
            "colors": [
              "#34d399"
            ],
            "data": [
              {
                "name": "M1",
                "score": 55
              },
              {
                "name": "M2",
                "score": 54
              },
              {
                "name": "M3",
                "score": 63
              },
              {
                "name": "M4",
                "score": 71
              },
              {
                "name": "M5",
                "score": 23
              },
              {
                "name": "M6",
                "score": 82
              },
              {
                "name": "M7",
                "score": 71
              }
            ]
          },
          {
            "type": "AreaChart",
            "title": "Incident Reports",
            "subtext": "Monthly reported anomalies",
            "badge": "Live view",
            "dataKey": [
              "incidents"
            ],
            "colors": [
              "#f43f5e"
            ],
            "data": [
              {
                "name": "M1",
                "incidents": 50
              },
              {
                "name": "M2",
                "incidents": 94
              },
              {
                "name": "M3",
                "incidents": 74
              },
              {
                "name": "M4",
                "incidents": 88
              },
              {
                "name": "M5",
                "incidents": 63
              },
              {
                "name": "M6",
                "incidents": 91
              },
              {
                "name": "M7",
                "incidents": 97
              }
            ]
          }
        ]
      }
    ]
  },
  "TravelAndTourism": {
    "title": "Travel And Tourism Operations",
    "subtitle": "Interactive analytics and key metrics overview.",
    "theme": "indigo",
    "kpis": [
      {
        "title": "THROUGHPUT",
        "value": "514 MB/s",
        "change": "+2.1%",
        "subtext": "vs last mo",
        "icon": "ShieldCheck",
        "color": "indigo"
      },
      {
        "title": "UPTIME",
        "value": "99.82%",
        "change": "-2.8%",
        "subtext": "vs last wk",
        "icon": "Database",
        "color": "cyan"
      },
      {
        "title": "EFFICIENCY",
        "value": "77%",
        "change": "+1.9%",
        "subtext": "vs target",
        "icon": "Truck",
        "color": "indigo"
      },
      {
        "title": "PROCESSING",
        "value": "32k/hr",
        "change": "+0.9%",
        "subtext": "yoy",
        "icon": "Wrench",
        "color": "emerald"
      }
    ],
    "tabs": [
      {
        "name": "Operations",
        "charts": [
          {
            "type": "LineChart",
            "title": "TravelAndTourism Performance",
            "subtext": "Core metrics tracking",
            "badge": "Live view",
            "dataKey": [
              "primary",
              "secondary"
            ],
            "colors": [
              "#2dd4bf",
              "#fbbf24"
            ],
            "data": [
              {
                "name": "M1",
                "primary": 98,
                "secondary": 39
              },
              {
                "name": "M2",
                "primary": 84,
                "secondary": 98
              },
              {
                "name": "M3",
                "primary": 45,
                "secondary": 62
              },
              {
                "name": "M4",
                "primary": 64,
                "secondary": 35
              },
              {
                "name": "M5",
                "primary": 45,
                "secondary": 76
              },
              {
                "name": "M6",
                "primary": 31,
                "secondary": 66
              },
              {
                "name": "M7",
                "primary": 48,
                "secondary": 109
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Regional Distribution",
            "subtext": "Click a bar to focus (Top 7)",
            "badge": "Live view",
            "dataKey": [
              "volume"
            ],
            "colors": [
              "url(#colorEmerald)"
            ],
            "data": [
              {
                "name": "M1",
                "volume": 30
              },
              {
                "name": "M2",
                "volume": 68
              },
              {
                "name": "M3",
                "volume": 99
              },
              {
                "name": "M4",
                "volume": 27
              },
              {
                "name": "M5",
                "volume": 27
              },
              {
                "name": "M6",
                "volume": 44
              },
              {
                "name": "M7",
                "volume": 48
              }
            ]
          }
        ]
      },
      {
        "name": "Insights",
        "charts": [
          {
            "type": "AreaChart",
            "title": "Resource Utilization",
            "subtext": "Daily volume processed",
            "badge": "Live view",
            "dataKey": [
              "active"
            ],
            "colors": [
              "#818cf8"
            ],
            "data": [
              {
                "name": "M1",
                "active": 33
              },
              {
                "name": "M2",
                "active": 56
              },
              {
                "name": "M3",
                "active": 28
              },
              {
                "name": "M4",
                "active": 52
              },
              {
                "name": "M5",
                "active": 67
              },
              {
                "name": "M6",
                "active": 50
              },
              {
                "name": "M7",
                "active": 68
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Bottlenecks",
            "subtext": "SLA breaches and delays",
            "badge": "Live view",
            "dataKey": [
              "delays"
            ],
            "colors": [
              "url(#colorAmber)"
            ],
            "data": [
              {
                "name": "M1",
                "delays": 93
              },
              {
                "name": "M2",
                "delays": 64
              },
              {
                "name": "M3",
                "delays": 71
              },
              {
                "name": "M4",
                "delays": 97
              },
              {
                "name": "M5",
                "delays": 68
              },
              {
                "name": "M6",
                "delays": 62
              },
              {
                "name": "M7",
                "delays": 41
              }
            ]
          }
        ]
      },
      {
        "name": "Reports",
        "charts": [
          {
            "type": "LineChart",
            "title": "Quality Scores",
            "subtext": "Rolling compliance rate",
            "badge": "Live view",
            "dataKey": [
              "score"
            ],
            "colors": [
              "#34d399"
            ],
            "data": [
              {
                "name": "M1",
                "score": 41
              },
              {
                "name": "M2",
                "score": 87
              },
              {
                "name": "M3",
                "score": 100
              },
              {
                "name": "M4",
                "score": 78
              },
              {
                "name": "M5",
                "score": 84
              },
              {
                "name": "M6",
                "score": 37
              },
              {
                "name": "M7",
                "score": 95
              }
            ]
          },
          {
            "type": "AreaChart",
            "title": "Incident Reports",
            "subtext": "Monthly reported anomalies",
            "badge": "Live view",
            "dataKey": [
              "incidents"
            ],
            "colors": [
              "#f43f5e"
            ],
            "data": [
              {
                "name": "M1",
                "incidents": 27
              },
              {
                "name": "M2",
                "incidents": 70
              },
              {
                "name": "M3",
                "incidents": 26
              },
              {
                "name": "M4",
                "incidents": 26
              },
              {
                "name": "M5",
                "incidents": 57
              },
              {
                "name": "M6",
                "incidents": 95
              },
              {
                "name": "M7",
                "incidents": 74
              }
            ]
          }
        ]
      }
    ]
  },
  "MediaAndEntertainment": {
    "title": "Media And Entertainment Operations",
    "subtitle": "Interactive analytics and key metrics overview.",
    "theme": "cyan",
    "kpis": [
      {
        "title": "UPTIME",
        "value": "99.25%",
        "change": "+0.2%",
        "subtext": "vs last mo",
        "icon": "Truck",
        "color": "cyan"
      },
      {
        "title": "EFFICIENCY",
        "value": "80%",
        "change": "-1.3%",
        "subtext": "vs last wk",
        "icon": "Wrench",
        "color": "cyan"
      },
      {
        "title": "PROCESSING",
        "value": "15k/hr",
        "change": "+0.3%",
        "subtext": "vs target",
        "icon": "Activity",
        "color": "emerald"
      },
      {
        "title": "RISK SCORE",
        "value": "12/100",
        "change": "+0.9%",
        "subtext": "yoy",
        "icon": "Box",
        "color": "amber"
      }
    ],
    "tabs": [
      {
        "name": "Overview",
        "charts": [
          {
            "type": "LineChart",
            "title": "MediaAndEntertainment Performance",
            "subtext": "Core metrics tracking",
            "badge": "Live view",
            "dataKey": [
              "primary",
              "secondary"
            ],
            "colors": [
              "#2dd4bf",
              "#fbbf24"
            ],
            "data": [
              {
                "name": "M1",
                "primary": 31,
                "secondary": 77
              },
              {
                "name": "M2",
                "primary": 47,
                "secondary": 35
              },
              {
                "name": "M3",
                "primary": 23,
                "secondary": 103
              },
              {
                "name": "M4",
                "primary": 92,
                "secondary": 86
              },
              {
                "name": "M5",
                "primary": 86,
                "secondary": 79
              },
              {
                "name": "M6",
                "primary": 39,
                "secondary": 70
              },
              {
                "name": "M7",
                "primary": 38,
                "secondary": 69
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Regional Distribution",
            "subtext": "Click a bar to focus (Top 7)",
            "badge": "Live view",
            "dataKey": [
              "volume"
            ],
            "colors": [
              "url(#colorEmerald)"
            ],
            "data": [
              {
                "name": "M1",
                "volume": 48
              },
              {
                "name": "M2",
                "volume": 65
              },
              {
                "name": "M3",
                "volume": 37
              },
              {
                "name": "M4",
                "volume": 81
              },
              {
                "name": "M5",
                "volume": 54
              },
              {
                "name": "M6",
                "volume": 94
              },
              {
                "name": "M7",
                "volume": 93
              }
            ]
          }
        ]
      },
      {
        "name": "Analytics",
        "charts": [
          {
            "type": "AreaChart",
            "title": "Resource Utilization",
            "subtext": "Daily volume processed",
            "badge": "Live view",
            "dataKey": [
              "active"
            ],
            "colors": [
              "#818cf8"
            ],
            "data": [
              {
                "name": "M1",
                "active": 83
              },
              {
                "name": "M2",
                "active": 88
              },
              {
                "name": "M3",
                "active": 67
              },
              {
                "name": "M4",
                "active": 79
              },
              {
                "name": "M5",
                "active": 89
              },
              {
                "name": "M6",
                "active": 88
              },
              {
                "name": "M7",
                "active": 56
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Bottlenecks",
            "subtext": "SLA breaches and delays",
            "badge": "Live view",
            "dataKey": [
              "delays"
            ],
            "colors": [
              "url(#colorAmber)"
            ],
            "data": [
              {
                "name": "M1",
                "delays": 26
              },
              {
                "name": "M2",
                "delays": 94
              },
              {
                "name": "M3",
                "delays": 54
              },
              {
                "name": "M4",
                "delays": 47
              },
              {
                "name": "M5",
                "delays": 31
              },
              {
                "name": "M6",
                "delays": 81
              },
              {
                "name": "M7",
                "delays": 72
              }
            ]
          }
        ]
      },
      {
        "name": "Operations",
        "charts": [
          {
            "type": "LineChart",
            "title": "Quality Scores",
            "subtext": "Rolling compliance rate",
            "badge": "Live view",
            "dataKey": [
              "score"
            ],
            "colors": [
              "#34d399"
            ],
            "data": [
              {
                "name": "M1",
                "score": 46
              },
              {
                "name": "M2",
                "score": 21
              },
              {
                "name": "M3",
                "score": 60
              },
              {
                "name": "M4",
                "score": 28
              },
              {
                "name": "M5",
                "score": 41
              },
              {
                "name": "M6",
                "score": 30
              },
              {
                "name": "M7",
                "score": 53
              }
            ]
          },
          {
            "type": "AreaChart",
            "title": "Incident Reports",
            "subtext": "Monthly reported anomalies",
            "badge": "Live view",
            "dataKey": [
              "incidents"
            ],
            "colors": [
              "#f43f5e"
            ],
            "data": [
              {
                "name": "M1",
                "incidents": 50
              },
              {
                "name": "M2",
                "incidents": 26
              },
              {
                "name": "M3",
                "incidents": 36
              },
              {
                "name": "M4",
                "incidents": 90
              },
              {
                "name": "M5",
                "incidents": 87
              },
              {
                "name": "M6",
                "incidents": 49
              },
              {
                "name": "M7",
                "incidents": 90
              }
            ]
          }
        ]
      }
    ]
  },
  "EnvironmentalServicesAndWasteManagement": {
    "title": "Environmental Services And Waste Management Operations",
    "subtitle": "Interactive analytics and key metrics overview.",
    "theme": "fuchsia",
    "kpis": [
      {
        "title": "EFFICIENCY",
        "value": "89%",
        "change": "+2.7%",
        "subtext": "vs last mo",
        "icon": "Activity",
        "color": "fuchsia"
      },
      {
        "title": "PROCESSING",
        "value": "24k/hr",
        "change": "-1.5%",
        "subtext": "vs last wk",
        "icon": "Box",
        "color": "emerald"
      },
      {
        "title": "RISK SCORE",
        "value": "9/100",
        "change": "+0.5%",
        "subtext": "vs target",
        "icon": "ShieldCheck",
        "color": "amber"
      },
      {
        "title": "SYSTEM LOAD",
        "value": "84%",
        "change": "+0.4%",
        "subtext": "yoy",
        "icon": "Database",
        "color": "rose"
      }
    ],
    "tabs": [
      {
        "name": "Reports",
        "charts": [
          {
            "type": "LineChart",
            "title": "EnvironmentalServicesAndWasteManagement Performance",
            "subtext": "Core metrics tracking",
            "badge": "Live view",
            "dataKey": [
              "primary",
              "secondary"
            ],
            "colors": [
              "#2dd4bf",
              "#fbbf24"
            ],
            "data": [
              {
                "name": "M1",
                "primary": 113,
                "secondary": 81
              },
              {
                "name": "M2",
                "primary": 100,
                "secondary": 97
              },
              {
                "name": "M3",
                "primary": 82,
                "secondary": 91
              },
              {
                "name": "M4",
                "primary": 62,
                "secondary": 80
              },
              {
                "name": "M5",
                "primary": 101,
                "secondary": 116
              },
              {
                "name": "M6",
                "primary": 47,
                "secondary": 36
              },
              {
                "name": "M7",
                "primary": 38,
                "secondary": 64
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Regional Distribution",
            "subtext": "Click a bar to focus (Top 7)",
            "badge": "Live view",
            "dataKey": [
              "volume"
            ],
            "colors": [
              "url(#colorEmerald)"
            ],
            "data": [
              {
                "name": "M1",
                "volume": 34
              },
              {
                "name": "M2",
                "volume": 111
              },
              {
                "name": "M3",
                "volume": 92
              },
              {
                "name": "M4",
                "volume": 43
              },
              {
                "name": "M5",
                "volume": 72
              },
              {
                "name": "M6",
                "volume": 107
              },
              {
                "name": "M7",
                "volume": 47
              }
            ]
          }
        ]
      },
      {
        "name": "Overview",
        "charts": [
          {
            "type": "AreaChart",
            "title": "Resource Utilization",
            "subtext": "Daily volume processed",
            "badge": "Live view",
            "dataKey": [
              "active"
            ],
            "colors": [
              "#818cf8"
            ],
            "data": [
              {
                "name": "M1",
                "active": 43
              },
              {
                "name": "M2",
                "active": 56
              },
              {
                "name": "M3",
                "active": 112
              },
              {
                "name": "M4",
                "active": 59
              },
              {
                "name": "M5",
                "active": 45
              },
              {
                "name": "M6",
                "active": 93
              },
              {
                "name": "M7",
                "active": 87
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Bottlenecks",
            "subtext": "SLA breaches and delays",
            "badge": "Live view",
            "dataKey": [
              "delays"
            ],
            "colors": [
              "url(#colorAmber)"
            ],
            "data": [
              {
                "name": "M1",
                "delays": 53
              },
              {
                "name": "M2",
                "delays": 97
              },
              {
                "name": "M3",
                "delays": 105
              },
              {
                "name": "M4",
                "delays": 69
              },
              {
                "name": "M5",
                "delays": 20
              },
              {
                "name": "M6",
                "delays": 31
              },
              {
                "name": "M7",
                "delays": 96
              }
            ]
          }
        ]
      },
      {
        "name": "Analytics",
        "charts": [
          {
            "type": "LineChart",
            "title": "Quality Scores",
            "subtext": "Rolling compliance rate",
            "badge": "Live view",
            "dataKey": [
              "score"
            ],
            "colors": [
              "#34d399"
            ],
            "data": [
              {
                "name": "M1",
                "score": 70
              },
              {
                "name": "M2",
                "score": 112
              },
              {
                "name": "M3",
                "score": 93
              },
              {
                "name": "M4",
                "score": 83
              },
              {
                "name": "M5",
                "score": 50
              },
              {
                "name": "M6",
                "score": 84
              },
              {
                "name": "M7",
                "score": 27
              }
            ]
          },
          {
            "type": "AreaChart",
            "title": "Incident Reports",
            "subtext": "Monthly reported anomalies",
            "badge": "Live view",
            "dataKey": [
              "incidents"
            ],
            "colors": [
              "#f43f5e"
            ],
            "data": [
              {
                "name": "M1",
                "incidents": 60
              },
              {
                "name": "M2",
                "incidents": 81
              },
              {
                "name": "M3",
                "incidents": 111
              },
              {
                "name": "M4",
                "incidents": 65
              },
              {
                "name": "M5",
                "incidents": 63
              },
              {
                "name": "M6",
                "incidents": 102
              },
              {
                "name": "M7",
                "incidents": 109
              }
            ]
          }
        ]
      }
    ]
  }
};