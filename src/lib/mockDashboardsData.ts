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
                "otif": 28,
                "leadTime": 77,
                "inventory": 41
              },
              {
                "name": "M2",
                "otif": 68,
                "leadTime": 66,
                "inventory": 60
              },
              {
                "name": "M3",
                "otif": 22,
                "leadTime": 49,
                "inventory": 25
              },
              {
                "name": "M4",
                "otif": 52,
                "leadTime": 70,
                "inventory": 68
              },
              {
                "name": "M5",
                "otif": 49,
                "leadTime": 51,
                "inventory": 25
              },
              {
                "name": "M6",
                "otif": 55,
                "leadTime": 79,
                "inventory": 65
              },
              {
                "name": "M7",
                "otif": 45,
                "leadTime": 56,
                "inventory": 45
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
                "risk": 45
              },
              {
                "name": "M2",
                "risk": 70
              },
              {
                "name": "M3",
                "risk": 73
              },
              {
                "name": "M4",
                "risk": 59
              },
              {
                "name": "M5",
                "risk": 73
              },
              {
                "name": "M6",
                "risk": 34
              },
              {
                "name": "M7",
                "risk": 60
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
                "volume": 37
              },
              {
                "name": "M2",
                "volume": 41
              },
              {
                "name": "M3",
                "volume": 63
              },
              {
                "name": "M4",
                "volume": 42
              },
              {
                "name": "M5",
                "volume": 55
              },
              {
                "name": "M6",
                "volume": 79
              },
              {
                "name": "M7",
                "volume": 43
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
                "passRate": 34
              },
              {
                "name": "M2",
                "passRate": 21
              },
              {
                "name": "M3",
                "passRate": 40
              },
              {
                "name": "M4",
                "passRate": 59
              },
              {
                "name": "M5",
                "passRate": 39
              },
              {
                "name": "M6",
                "passRate": 67
              },
              {
                "name": "M7",
                "passRate": 51
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
                "velocity": 77
              },
              {
                "name": "M2",
                "velocity": 77
              },
              {
                "name": "M3",
                "velocity": 77
              },
              {
                "name": "M4",
                "velocity": 48
              },
              {
                "name": "M5",
                "velocity": 64
              },
              {
                "name": "M6",
                "velocity": 45
              },
              {
                "name": "M7",
                "velocity": 40
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
                "yield": 31,
                "water": 59
              },
              {
                "name": "M2",
                "yield": 53,
                "water": 30
              },
              {
                "name": "M3",
                "yield": 47,
                "water": 57
              },
              {
                "name": "M4",
                "yield": 33,
                "water": 59
              },
              {
                "name": "M5",
                "yield": 50,
                "water": 74
              },
              {
                "name": "M6",
                "yield": 25,
                "water": 64
              },
              {
                "name": "M7",
                "yield": 73,
                "water": 37
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
                "health": 47
              },
              {
                "name": "M2",
                "health": 68
              },
              {
                "name": "M3",
                "health": 79
              },
              {
                "name": "M4",
                "health": 49
              },
              {
                "name": "M5",
                "health": 73
              },
              {
                "name": "M6",
                "health": 32
              },
              {
                "name": "M7",
                "health": 50
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
                "growth": 25
              },
              {
                "name": "M2",
                "growth": 55
              },
              {
                "name": "M3",
                "growth": 28
              },
              {
                "name": "M4",
                "growth": 24
              },
              {
                "name": "M5",
                "growth": 41
              },
              {
                "name": "M6",
                "growth": 79
              },
              {
                "name": "M7",
                "growth": 66
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
                "fuel": 50
              },
              {
                "name": "M3",
                "fuel": 67
              },
              {
                "name": "M4",
                "fuel": 29
              },
              {
                "name": "M5",
                "fuel": 77
              },
              {
                "name": "M6",
                "fuel": 39
              },
              {
                "name": "M7",
                "fuel": 29
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
        "title": "OTIF / YIELD",
        "value": "87%",
        "change": "+1.9%",
        "subtext": "vs last mo",
        "icon": "Activity",
        "color": "rose"
      },
      {
        "title": "LEAD TIME",
        "value": "42d",
        "change": "-1.1%",
        "subtext": "vs last mo",
        "icon": "Box",
        "color": "rose"
      },
      {
        "title": "COMPLIANCE",
        "value": "89%",
        "change": "+1.7%",
        "subtext": "vs audit",
        "icon": "ShieldCheck",
        "color": "rose"
      },
      {
        "title": "UPTIME",
        "value": "90%",
        "change": "+0.2%",
        "subtext": "vs last mo",
        "icon": "Database",
        "color": "rose"
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
                "metricA": 41,
                "metricB": 52
              },
              {
                "name": "M2",
                "metricA": 30,
                "metricB": 23
              },
              {
                "name": "M3",
                "metricA": 56,
                "metricB": 35
              },
              {
                "name": "M4",
                "metricA": 21,
                "metricB": 74
              },
              {
                "name": "M5",
                "metricA": 59,
                "metricB": 47
              },
              {
                "name": "M6",
                "metricA": 64,
                "metricB": 50
              },
              {
                "name": "M7",
                "metricA": 56,
                "metricB": 40
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Top Risks/Anomalies",
            "subtext": "Click a bar to focus (Top 7)",
            "badge": "Live view",
            "dataKey": [
              "metricA"
            ],
            "colors": [
              "url(#colorEmerald)"
            ],
            "data": [
              {
                "name": "M1",
                "metricA": 63
              },
              {
                "name": "M2",
                "metricA": 53
              },
              {
                "name": "M3",
                "metricA": 37
              },
              {
                "name": "M4",
                "metricA": 45
              },
              {
                "name": "M5",
                "metricA": 31
              },
              {
                "name": "M6",
                "metricA": 50
              },
              {
                "name": "M7",
                "metricA": 53
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
            "title": "Logistics Throughput",
            "subtext": "Daily volume processed",
            "badge": "Live view",
            "dataKey": [
              "volume"
            ],
            "colors": [
              "#818cf8"
            ],
            "data": [
              {
                "name": "M1",
                "volume": 63
              },
              {
                "name": "M2",
                "volume": 24
              },
              {
                "name": "M3",
                "volume": 64
              },
              {
                "name": "M4",
                "volume": 64
              },
              {
                "name": "M5",
                "volume": 30
              },
              {
                "name": "M6",
                "volume": 74
              },
              {
                "name": "M7",
                "volume": 62
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Vendor Delays",
            "subtext": "SLA breaches by vendor",
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
                "delays": 70
              },
              {
                "name": "M2",
                "delays": 28
              },
              {
                "name": "M3",
                "delays": 25
              },
              {
                "name": "M4",
                "delays": 74
              },
              {
                "name": "M5",
                "delays": 35
              },
              {
                "name": "M6",
                "delays": 64
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
        "name": "Compliance",
        "charts": [
          {
            "type": "LineChart",
            "title": "Audit Scores",
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
                "score": 37
              },
              {
                "name": "M2",
                "score": 37
              },
              {
                "name": "M3",
                "score": 48
              },
              {
                "name": "M4",
                "score": 63
              },
              {
                "name": "M5",
                "score": 66
              },
              {
                "name": "M6",
                "score": 71
              },
              {
                "name": "M7",
                "score": 66
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
                "incidents": 34
              },
              {
                "name": "M3",
                "incidents": 74
              },
              {
                "name": "M4",
                "incidents": 69
              },
              {
                "name": "M5",
                "incidents": 65
              },
              {
                "name": "M6",
                "incidents": 40
              },
              {
                "name": "M7",
                "incidents": 70
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
        "title": "OTIF / YIELD",
        "value": "99%",
        "change": "+1.6%",
        "subtext": "vs last mo",
        "icon": "Activity",
        "color": "indigo"
      },
      {
        "title": "LEAD TIME",
        "value": "25d",
        "change": "-1.6%",
        "subtext": "vs last mo",
        "icon": "Box",
        "color": "indigo"
      },
      {
        "title": "COMPLIANCE",
        "value": "95%",
        "change": "+0.1%",
        "subtext": "vs audit",
        "icon": "ShieldCheck",
        "color": "indigo"
      },
      {
        "title": "UPTIME",
        "value": "96%",
        "change": "+0.8%",
        "subtext": "vs last mo",
        "icon": "Database",
        "color": "indigo"
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
                "metricB": 33
              },
              {
                "name": "M2",
                "metricA": 21,
                "metricB": 21
              },
              {
                "name": "M3",
                "metricA": 65,
                "metricB": 45
              },
              {
                "name": "M4",
                "metricA": 40,
                "metricB": 77
              },
              {
                "name": "M5",
                "metricA": 27,
                "metricB": 31
              },
              {
                "name": "M6",
                "metricA": 62,
                "metricB": 21
              },
              {
                "name": "M7",
                "metricA": 24,
                "metricB": 29
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Top Risks/Anomalies",
            "subtext": "Click a bar to focus (Top 7)",
            "badge": "Live view",
            "dataKey": [
              "metricA"
            ],
            "colors": [
              "url(#colorEmerald)"
            ],
            "data": [
              {
                "name": "M1",
                "metricA": 35
              },
              {
                "name": "M2",
                "metricA": 61
              },
              {
                "name": "M3",
                "metricA": 38
              },
              {
                "name": "M4",
                "metricA": 78
              },
              {
                "name": "M5",
                "metricA": 76
              },
              {
                "name": "M6",
                "metricA": 23
              },
              {
                "name": "M7",
                "metricA": 69
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
            "title": "Logistics Throughput",
            "subtext": "Daily volume processed",
            "badge": "Live view",
            "dataKey": [
              "volume"
            ],
            "colors": [
              "#818cf8"
            ],
            "data": [
              {
                "name": "M1",
                "volume": 25
              },
              {
                "name": "M2",
                "volume": 60
              },
              {
                "name": "M3",
                "volume": 77
              },
              {
                "name": "M4",
                "volume": 30
              },
              {
                "name": "M5",
                "volume": 61
              },
              {
                "name": "M6",
                "volume": 59
              },
              {
                "name": "M7",
                "volume": 57
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Vendor Delays",
            "subtext": "SLA breaches by vendor",
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
                "delays": 46
              },
              {
                "name": "M2",
                "delays": 79
              },
              {
                "name": "M3",
                "delays": 51
              },
              {
                "name": "M4",
                "delays": 69
              },
              {
                "name": "M5",
                "delays": 76
              },
              {
                "name": "M6",
                "delays": 58
              },
              {
                "name": "M7",
                "delays": 75
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
            "title": "Audit Scores",
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
                "score": 21
              },
              {
                "name": "M2",
                "score": 70
              },
              {
                "name": "M3",
                "score": 31
              },
              {
                "name": "M4",
                "score": 28
              },
              {
                "name": "M5",
                "score": 72
              },
              {
                "name": "M6",
                "score": 63
              },
              {
                "name": "M7",
                "score": 55
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
                "incidents": 70
              },
              {
                "name": "M2",
                "incidents": 65
              },
              {
                "name": "M3",
                "incidents": 50
              },
              {
                "name": "M4",
                "incidents": 39
              },
              {
                "name": "M5",
                "incidents": 72
              },
              {
                "name": "M6",
                "incidents": 72
              },
              {
                "name": "M7",
                "incidents": 33
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
        "title": "OTIF / YIELD",
        "value": "90%",
        "change": "+0.5%",
        "subtext": "vs last mo",
        "icon": "Activity",
        "color": "cyan"
      },
      {
        "title": "LEAD TIME",
        "value": "45d",
        "change": "-0.1%",
        "subtext": "vs last mo",
        "icon": "Box",
        "color": "cyan"
      },
      {
        "title": "COMPLIANCE",
        "value": "89%",
        "change": "+0.8%",
        "subtext": "vs audit",
        "icon": "ShieldCheck",
        "color": "cyan"
      },
      {
        "title": "UPTIME",
        "value": "93%",
        "change": "+0.9%",
        "subtext": "vs last mo",
        "icon": "Database",
        "color": "cyan"
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
                "metricA": 59,
                "metricB": 62
              },
              {
                "name": "M2",
                "metricA": 58,
                "metricB": 50
              },
              {
                "name": "M3",
                "metricA": 75,
                "metricB": 47
              },
              {
                "name": "M4",
                "metricA": 41,
                "metricB": 27
              },
              {
                "name": "M5",
                "metricA": 46,
                "metricB": 47
              },
              {
                "name": "M6",
                "metricA": 42,
                "metricB": 74
              },
              {
                "name": "M7",
                "metricA": 49,
                "metricB": 67
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Top Risks/Anomalies",
            "subtext": "Click a bar to focus (Top 7)",
            "badge": "Live view",
            "dataKey": [
              "metricA"
            ],
            "colors": [
              "url(#colorEmerald)"
            ],
            "data": [
              {
                "name": "M1",
                "metricA": 27
              },
              {
                "name": "M2",
                "metricA": 78
              },
              {
                "name": "M3",
                "metricA": 65
              },
              {
                "name": "M4",
                "metricA": 63
              },
              {
                "name": "M5",
                "metricA": 59
              },
              {
                "name": "M6",
                "metricA": 51
              },
              {
                "name": "M7",
                "metricA": 57
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
            "title": "Logistics Throughput",
            "subtext": "Daily volume processed",
            "badge": "Live view",
            "dataKey": [
              "volume"
            ],
            "colors": [
              "#818cf8"
            ],
            "data": [
              {
                "name": "M1",
                "volume": 32
              },
              {
                "name": "M2",
                "volume": 64
              },
              {
                "name": "M3",
                "volume": 33
              },
              {
                "name": "M4",
                "volume": 37
              },
              {
                "name": "M5",
                "volume": 28
              },
              {
                "name": "M6",
                "volume": 46
              },
              {
                "name": "M7",
                "volume": 23
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Vendor Delays",
            "subtext": "SLA breaches by vendor",
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
                "delays": 30
              },
              {
                "name": "M2",
                "delays": 28
              },
              {
                "name": "M3",
                "delays": 78
              },
              {
                "name": "M4",
                "delays": 72
              },
              {
                "name": "M5",
                "delays": 22
              },
              {
                "name": "M6",
                "delays": 40
              },
              {
                "name": "M7",
                "delays": 53
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
            "title": "Audit Scores",
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
                "score": 50
              },
              {
                "name": "M2",
                "score": 44
              },
              {
                "name": "M3",
                "score": 79
              },
              {
                "name": "M4",
                "score": 59
              },
              {
                "name": "M5",
                "score": 61
              },
              {
                "name": "M6",
                "score": 65
              },
              {
                "name": "M7",
                "score": 54
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
                "incidents": 37
              },
              {
                "name": "M2",
                "incidents": 78
              },
              {
                "name": "M3",
                "incidents": 31
              },
              {
                "name": "M4",
                "incidents": 63
              },
              {
                "name": "M5",
                "incidents": 39
              },
              {
                "name": "M6",
                "incidents": 50
              },
              {
                "name": "M7",
                "incidents": 26
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
        "title": "OTIF / YIELD",
        "value": "87%",
        "change": "+1.5%",
        "subtext": "vs last mo",
        "icon": "Activity",
        "color": "fuchsia"
      },
      {
        "title": "LEAD TIME",
        "value": "35d",
        "change": "-0.6%",
        "subtext": "vs last mo",
        "icon": "Box",
        "color": "fuchsia"
      },
      {
        "title": "COMPLIANCE",
        "value": "93%",
        "change": "+0.7%",
        "subtext": "vs audit",
        "icon": "ShieldCheck",
        "color": "fuchsia"
      },
      {
        "title": "UPTIME",
        "value": "91%",
        "change": "+0.4%",
        "subtext": "vs last mo",
        "icon": "Database",
        "color": "fuchsia"
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
                "metricA": 42,
                "metricB": 64
              },
              {
                "name": "M2",
                "metricA": 70,
                "metricB": 68
              },
              {
                "name": "M3",
                "metricA": 31,
                "metricB": 33
              },
              {
                "name": "M4",
                "metricA": 32,
                "metricB": 20
              },
              {
                "name": "M5",
                "metricA": 49,
                "metricB": 49
              },
              {
                "name": "M6",
                "metricA": 28,
                "metricB": 65
              },
              {
                "name": "M7",
                "metricA": 36,
                "metricB": 57
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Top Risks/Anomalies",
            "subtext": "Click a bar to focus (Top 7)",
            "badge": "Live view",
            "dataKey": [
              "metricA"
            ],
            "colors": [
              "url(#colorEmerald)"
            ],
            "data": [
              {
                "name": "M1",
                "metricA": 71
              },
              {
                "name": "M2",
                "metricA": 71
              },
              {
                "name": "M3",
                "metricA": 23
              },
              {
                "name": "M4",
                "metricA": 49
              },
              {
                "name": "M5",
                "metricA": 59
              },
              {
                "name": "M6",
                "metricA": 40
              },
              {
                "name": "M7",
                "metricA": 56
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
            "title": "Logistics Throughput",
            "subtext": "Daily volume processed",
            "badge": "Live view",
            "dataKey": [
              "volume"
            ],
            "colors": [
              "#818cf8"
            ],
            "data": [
              {
                "name": "M1",
                "volume": 70
              },
              {
                "name": "M2",
                "volume": 60
              },
              {
                "name": "M3",
                "volume": 38
              },
              {
                "name": "M4",
                "volume": 59
              },
              {
                "name": "M5",
                "volume": 28
              },
              {
                "name": "M6",
                "volume": 33
              },
              {
                "name": "M7",
                "volume": 79
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Vendor Delays",
            "subtext": "SLA breaches by vendor",
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
                "delays": 65
              },
              {
                "name": "M3",
                "delays": 43
              },
              {
                "name": "M4",
                "delays": 44
              },
              {
                "name": "M5",
                "delays": 31
              },
              {
                "name": "M6",
                "delays": 50
              },
              {
                "name": "M7",
                "delays": 35
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
            "title": "Audit Scores",
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
                "score": 40
              },
              {
                "name": "M2",
                "score": 67
              },
              {
                "name": "M3",
                "score": 34
              },
              {
                "name": "M4",
                "score": 39
              },
              {
                "name": "M5",
                "score": 69
              },
              {
                "name": "M6",
                "score": 24
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
                "incidents": 72
              },
              {
                "name": "M2",
                "incidents": 55
              },
              {
                "name": "M3",
                "incidents": 22
              },
              {
                "name": "M4",
                "incidents": 46
              },
              {
                "name": "M5",
                "incidents": 32
              },
              {
                "name": "M6",
                "incidents": 53
              },
              {
                "name": "M7",
                "incidents": 73
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
        "title": "OTIF / YIELD",
        "value": "93%",
        "change": "+1.6%",
        "subtext": "vs last mo",
        "icon": "Activity",
        "color": "emerald"
      },
      {
        "title": "LEAD TIME",
        "value": "43d",
        "change": "-2.7%",
        "subtext": "vs last mo",
        "icon": "Box",
        "color": "emerald"
      },
      {
        "title": "COMPLIANCE",
        "value": "96%",
        "change": "+0.3%",
        "subtext": "vs audit",
        "icon": "ShieldCheck",
        "color": "emerald"
      },
      {
        "title": "UPTIME",
        "value": "99%",
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
                "metricA": 67,
                "metricB": 36
              },
              {
                "name": "M2",
                "metricA": 59,
                "metricB": 58
              },
              {
                "name": "M3",
                "metricA": 29,
                "metricB": 45
              },
              {
                "name": "M4",
                "metricA": 72,
                "metricB": 35
              },
              {
                "name": "M5",
                "metricA": 35,
                "metricB": 23
              },
              {
                "name": "M6",
                "metricA": 57,
                "metricB": 53
              },
              {
                "name": "M7",
                "metricA": 45,
                "metricB": 20
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Top Risks/Anomalies",
            "subtext": "Click a bar to focus (Top 7)",
            "badge": "Live view",
            "dataKey": [
              "metricA"
            ],
            "colors": [
              "url(#colorEmerald)"
            ],
            "data": [
              {
                "name": "M1",
                "metricA": 50
              },
              {
                "name": "M2",
                "metricA": 22
              },
              {
                "name": "M3",
                "metricA": 39
              },
              {
                "name": "M4",
                "metricA": 22
              },
              {
                "name": "M5",
                "metricA": 34
              },
              {
                "name": "M6",
                "metricA": 30
              },
              {
                "name": "M7",
                "metricA": 31
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
            "title": "Logistics Throughput",
            "subtext": "Daily volume processed",
            "badge": "Live view",
            "dataKey": [
              "volume"
            ],
            "colors": [
              "#818cf8"
            ],
            "data": [
              {
                "name": "M1",
                "volume": 67
              },
              {
                "name": "M2",
                "volume": 44
              },
              {
                "name": "M3",
                "volume": 58
              },
              {
                "name": "M4",
                "volume": 40
              },
              {
                "name": "M5",
                "volume": 74
              },
              {
                "name": "M6",
                "volume": 76
              },
              {
                "name": "M7",
                "volume": 34
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Vendor Delays",
            "subtext": "SLA breaches by vendor",
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
                "delays": 72
              },
              {
                "name": "M2",
                "delays": 59
              },
              {
                "name": "M3",
                "delays": 57
              },
              {
                "name": "M4",
                "delays": 47
              },
              {
                "name": "M5",
                "delays": 33
              },
              {
                "name": "M6",
                "delays": 61
              },
              {
                "name": "M7",
                "delays": 30
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
            "title": "Audit Scores",
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
                "score": 69
              },
              {
                "name": "M2",
                "score": 24
              },
              {
                "name": "M3",
                "score": 36
              },
              {
                "name": "M4",
                "score": 33
              },
              {
                "name": "M5",
                "score": 79
              },
              {
                "name": "M6",
                "score": 45
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
                "incidents": 33
              },
              {
                "name": "M2",
                "incidents": 25
              },
              {
                "name": "M3",
                "incidents": 26
              },
              {
                "name": "M4",
                "incidents": 64
              },
              {
                "name": "M5",
                "incidents": 40
              },
              {
                "name": "M6",
                "incidents": 43
              },
              {
                "name": "M7",
                "incidents": 28
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
        "title": "OTIF / YIELD",
        "value": "89%",
        "change": "+1.3%",
        "subtext": "vs last mo",
        "icon": "Activity",
        "color": "amber"
      },
      {
        "title": "LEAD TIME",
        "value": "56d",
        "change": "-0.6%",
        "subtext": "vs last mo",
        "icon": "Box",
        "color": "amber"
      },
      {
        "title": "COMPLIANCE",
        "value": "87%",
        "change": "+1.6%",
        "subtext": "vs audit",
        "icon": "ShieldCheck",
        "color": "amber"
      },
      {
        "title": "UPTIME",
        "value": "91%",
        "change": "+0.3%",
        "subtext": "vs last mo",
        "icon": "Database",
        "color": "amber"
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
                "metricA": 45,
                "metricB": 26
              },
              {
                "name": "M2",
                "metricA": 36,
                "metricB": 27
              },
              {
                "name": "M3",
                "metricA": 77,
                "metricB": 59
              },
              {
                "name": "M4",
                "metricA": 35,
                "metricB": 21
              },
              {
                "name": "M5",
                "metricA": 23,
                "metricB": 65
              },
              {
                "name": "M6",
                "metricA": 26,
                "metricB": 56
              },
              {
                "name": "M7",
                "metricA": 39,
                "metricB": 59
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Top Risks/Anomalies",
            "subtext": "Click a bar to focus (Top 7)",
            "badge": "Live view",
            "dataKey": [
              "metricA"
            ],
            "colors": [
              "url(#colorEmerald)"
            ],
            "data": [
              {
                "name": "M1",
                "metricA": 57
              },
              {
                "name": "M2",
                "metricA": 40
              },
              {
                "name": "M3",
                "metricA": 37
              },
              {
                "name": "M4",
                "metricA": 65
              },
              {
                "name": "M5",
                "metricA": 62
              },
              {
                "name": "M6",
                "metricA": 37
              },
              {
                "name": "M7",
                "metricA": 77
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
            "title": "Logistics Throughput",
            "subtext": "Daily volume processed",
            "badge": "Live view",
            "dataKey": [
              "volume"
            ],
            "colors": [
              "#818cf8"
            ],
            "data": [
              {
                "name": "M1",
                "volume": 49
              },
              {
                "name": "M2",
                "volume": 65
              },
              {
                "name": "M3",
                "volume": 67
              },
              {
                "name": "M4",
                "volume": 76
              },
              {
                "name": "M5",
                "volume": 60
              },
              {
                "name": "M6",
                "volume": 72
              },
              {
                "name": "M7",
                "volume": 32
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Vendor Delays",
            "subtext": "SLA breaches by vendor",
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
                "delays": 21
              },
              {
                "name": "M2",
                "delays": 51
              },
              {
                "name": "M3",
                "delays": 61
              },
              {
                "name": "M4",
                "delays": 61
              },
              {
                "name": "M5",
                "delays": 36
              },
              {
                "name": "M6",
                "delays": 31
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
        "name": "Compliance",
        "charts": [
          {
            "type": "LineChart",
            "title": "Audit Scores",
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
                "score": 36
              },
              {
                "name": "M3",
                "score": 43
              },
              {
                "name": "M4",
                "score": 24
              },
              {
                "name": "M5",
                "score": 23
              },
              {
                "name": "M6",
                "score": 46
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
                "incidents": 53
              },
              {
                "name": "M2",
                "incidents": 29
              },
              {
                "name": "M3",
                "incidents": 57
              },
              {
                "name": "M4",
                "incidents": 25
              },
              {
                "name": "M5",
                "incidents": 24
              },
              {
                "name": "M6",
                "incidents": 74
              },
              {
                "name": "M7",
                "incidents": 69
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
        "title": "OTIF / YIELD",
        "value": "97%",
        "change": "+1.7%",
        "subtext": "vs last mo",
        "icon": "Activity",
        "color": "rose"
      },
      {
        "title": "LEAD TIME",
        "value": "34d",
        "change": "-2.8%",
        "subtext": "vs last mo",
        "icon": "Box",
        "color": "rose"
      },
      {
        "title": "COMPLIANCE",
        "value": "95%",
        "change": "+1.9%",
        "subtext": "vs audit",
        "icon": "ShieldCheck",
        "color": "rose"
      },
      {
        "title": "UPTIME",
        "value": "92%",
        "change": "+0.2%",
        "subtext": "vs last mo",
        "icon": "Database",
        "color": "rose"
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
                "metricA": 65,
                "metricB": 52
              },
              {
                "name": "M2",
                "metricA": 38,
                "metricB": 51
              },
              {
                "name": "M3",
                "metricA": 75,
                "metricB": 31
              },
              {
                "name": "M4",
                "metricA": 33,
                "metricB": 78
              },
              {
                "name": "M5",
                "metricA": 73,
                "metricB": 66
              },
              {
                "name": "M6",
                "metricA": 42,
                "metricB": 52
              },
              {
                "name": "M7",
                "metricA": 77,
                "metricB": 56
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Top Risks/Anomalies",
            "subtext": "Click a bar to focus (Top 7)",
            "badge": "Live view",
            "dataKey": [
              "metricA"
            ],
            "colors": [
              "url(#colorEmerald)"
            ],
            "data": [
              {
                "name": "M1",
                "metricA": 30
              },
              {
                "name": "M2",
                "metricA": 27
              },
              {
                "name": "M3",
                "metricA": 62
              },
              {
                "name": "M4",
                "metricA": 37
              },
              {
                "name": "M5",
                "metricA": 43
              },
              {
                "name": "M6",
                "metricA": 56
              },
              {
                "name": "M7",
                "metricA": 64
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
            "title": "Logistics Throughput",
            "subtext": "Daily volume processed",
            "badge": "Live view",
            "dataKey": [
              "volume"
            ],
            "colors": [
              "#818cf8"
            ],
            "data": [
              {
                "name": "M1",
                "volume": 27
              },
              {
                "name": "M2",
                "volume": 37
              },
              {
                "name": "M3",
                "volume": 32
              },
              {
                "name": "M4",
                "volume": 47
              },
              {
                "name": "M5",
                "volume": 50
              },
              {
                "name": "M6",
                "volume": 70
              },
              {
                "name": "M7",
                "volume": 69
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Vendor Delays",
            "subtext": "SLA breaches by vendor",
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
                "delays": 24
              },
              {
                "name": "M3",
                "delays": 37
              },
              {
                "name": "M4",
                "delays": 65
              },
              {
                "name": "M5",
                "delays": 47
              },
              {
                "name": "M6",
                "delays": 39
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
        "name": "Compliance",
        "charts": [
          {
            "type": "LineChart",
            "title": "Audit Scores",
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
                "score": 21
              },
              {
                "name": "M2",
                "score": 50
              },
              {
                "name": "M3",
                "score": 64
              },
              {
                "name": "M4",
                "score": 31
              },
              {
                "name": "M5",
                "score": 44
              },
              {
                "name": "M6",
                "score": 32
              },
              {
                "name": "M7",
                "score": 46
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
                "incidents": 69
              },
              {
                "name": "M2",
                "incidents": 65
              },
              {
                "name": "M3",
                "incidents": 28
              },
              {
                "name": "M4",
                "incidents": 48
              },
              {
                "name": "M5",
                "incidents": 23
              },
              {
                "name": "M6",
                "incidents": 53
              },
              {
                "name": "M7",
                "incidents": 54
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
        "title": "OTIF / YIELD",
        "value": "93%",
        "change": "+0.8%",
        "subtext": "vs last mo",
        "icon": "Activity",
        "color": "indigo"
      },
      {
        "title": "LEAD TIME",
        "value": "29d",
        "change": "-1.0%",
        "subtext": "vs last mo",
        "icon": "Box",
        "color": "indigo"
      },
      {
        "title": "COMPLIANCE",
        "value": "98%",
        "change": "+1.6%",
        "subtext": "vs audit",
        "icon": "ShieldCheck",
        "color": "indigo"
      },
      {
        "title": "UPTIME",
        "value": "92%",
        "change": "+0.2%",
        "subtext": "vs last mo",
        "icon": "Database",
        "color": "indigo"
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
                "metricB": 54
              },
              {
                "name": "M2",
                "metricA": 70,
                "metricB": 47
              },
              {
                "name": "M3",
                "metricA": 36,
                "metricB": 37
              },
              {
                "name": "M4",
                "metricA": 27,
                "metricB": 42
              },
              {
                "name": "M5",
                "metricA": 73,
                "metricB": 34
              },
              {
                "name": "M6",
                "metricA": 76,
                "metricB": 29
              },
              {
                "name": "M7",
                "metricA": 25,
                "metricB": 45
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Top Risks/Anomalies",
            "subtext": "Click a bar to focus (Top 7)",
            "badge": "Live view",
            "dataKey": [
              "metricA"
            ],
            "colors": [
              "url(#colorEmerald)"
            ],
            "data": [
              {
                "name": "M1",
                "metricA": 29
              },
              {
                "name": "M2",
                "metricA": 66
              },
              {
                "name": "M3",
                "metricA": 46
              },
              {
                "name": "M4",
                "metricA": 45
              },
              {
                "name": "M5",
                "metricA": 76
              },
              {
                "name": "M6",
                "metricA": 47
              },
              {
                "name": "M7",
                "metricA": 31
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
            "title": "Logistics Throughput",
            "subtext": "Daily volume processed",
            "badge": "Live view",
            "dataKey": [
              "volume"
            ],
            "colors": [
              "#818cf8"
            ],
            "data": [
              {
                "name": "M1",
                "volume": 22
              },
              {
                "name": "M2",
                "volume": 67
              },
              {
                "name": "M3",
                "volume": 59
              },
              {
                "name": "M4",
                "volume": 31
              },
              {
                "name": "M5",
                "volume": 43
              },
              {
                "name": "M6",
                "volume": 71
              },
              {
                "name": "M7",
                "volume": 58
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Vendor Delays",
            "subtext": "SLA breaches by vendor",
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
                "delays": 25
              },
              {
                "name": "M3",
                "delays": 37
              },
              {
                "name": "M4",
                "delays": 21
              },
              {
                "name": "M5",
                "delays": 54
              },
              {
                "name": "M6",
                "delays": 27
              },
              {
                "name": "M7",
                "delays": 52
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
            "title": "Audit Scores",
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
                "score": 52
              },
              {
                "name": "M3",
                "score": 47
              },
              {
                "name": "M4",
                "score": 21
              },
              {
                "name": "M5",
                "score": 59
              },
              {
                "name": "M6",
                "score": 65
              },
              {
                "name": "M7",
                "score": 57
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
                "incidents": 38
              },
              {
                "name": "M2",
                "incidents": 48
              },
              {
                "name": "M3",
                "incidents": 75
              },
              {
                "name": "M4",
                "incidents": 24
              },
              {
                "name": "M5",
                "incidents": 68
              },
              {
                "name": "M6",
                "incidents": 76
              },
              {
                "name": "M7",
                "incidents": 47
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
        "title": "OTIF / YIELD",
        "value": "94%",
        "change": "+2.7%",
        "subtext": "vs last mo",
        "icon": "Activity",
        "color": "cyan"
      },
      {
        "title": "LEAD TIME",
        "value": "41d",
        "change": "-0.4%",
        "subtext": "vs last mo",
        "icon": "Box",
        "color": "cyan"
      },
      {
        "title": "COMPLIANCE",
        "value": "94%",
        "change": "+1.9%",
        "subtext": "vs audit",
        "icon": "ShieldCheck",
        "color": "cyan"
      },
      {
        "title": "UPTIME",
        "value": "94%",
        "change": "+0.8%",
        "subtext": "vs last mo",
        "icon": "Database",
        "color": "cyan"
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
                "metricA": 38,
                "metricB": 36
              },
              {
                "name": "M2",
                "metricA": 61,
                "metricB": 54
              },
              {
                "name": "M3",
                "metricA": 62,
                "metricB": 34
              },
              {
                "name": "M4",
                "metricA": 58,
                "metricB": 56
              },
              {
                "name": "M5",
                "metricA": 48,
                "metricB": 51
              },
              {
                "name": "M6",
                "metricA": 65,
                "metricB": 77
              },
              {
                "name": "M7",
                "metricA": 38,
                "metricB": 22
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Top Risks/Anomalies",
            "subtext": "Click a bar to focus (Top 7)",
            "badge": "Live view",
            "dataKey": [
              "metricA"
            ],
            "colors": [
              "url(#colorEmerald)"
            ],
            "data": [
              {
                "name": "M1",
                "metricA": 68
              },
              {
                "name": "M2",
                "metricA": 24
              },
              {
                "name": "M3",
                "metricA": 58
              },
              {
                "name": "M4",
                "metricA": 31
              },
              {
                "name": "M5",
                "metricA": 39
              },
              {
                "name": "M6",
                "metricA": 65
              },
              {
                "name": "M7",
                "metricA": 73
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
            "title": "Logistics Throughput",
            "subtext": "Daily volume processed",
            "badge": "Live view",
            "dataKey": [
              "volume"
            ],
            "colors": [
              "#818cf8"
            ],
            "data": [
              {
                "name": "M1",
                "volume": 65
              },
              {
                "name": "M2",
                "volume": 67
              },
              {
                "name": "M3",
                "volume": 71
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
                "volume": 43
              },
              {
                "name": "M7",
                "volume": 57
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Vendor Delays",
            "subtext": "SLA breaches by vendor",
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
                "delays": 35
              },
              {
                "name": "M2",
                "delays": 54
              },
              {
                "name": "M3",
                "delays": 74
              },
              {
                "name": "M4",
                "delays": 44
              },
              {
                "name": "M5",
                "delays": 24
              },
              {
                "name": "M6",
                "delays": 34
              },
              {
                "name": "M7",
                "delays": 22
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
            "title": "Audit Scores",
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
                "score": 53
              },
              {
                "name": "M2",
                "score": 73
              },
              {
                "name": "M3",
                "score": 75
              },
              {
                "name": "M4",
                "score": 78
              },
              {
                "name": "M5",
                "score": 28
              },
              {
                "name": "M6",
                "score": 69
              },
              {
                "name": "M7",
                "score": 63
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
                "incidents": 71
              },
              {
                "name": "M3",
                "incidents": 62
              },
              {
                "name": "M4",
                "incidents": 36
              },
              {
                "name": "M5",
                "incidents": 26
              },
              {
                "name": "M6",
                "incidents": 33
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
  "Hospitality": {
    "title": "Hospitality Operations",
    "subtitle": "Interactive analytics and key metrics overview.",
    "theme": "fuchsia",
    "kpis": [
      {
        "title": "OTIF / YIELD",
        "value": "97%",
        "change": "+2.2%",
        "subtext": "vs last mo",
        "icon": "Activity",
        "color": "fuchsia"
      },
      {
        "title": "LEAD TIME",
        "value": "42d",
        "change": "-2.7%",
        "subtext": "vs last mo",
        "icon": "Box",
        "color": "fuchsia"
      },
      {
        "title": "COMPLIANCE",
        "value": "98%",
        "change": "+1.2%",
        "subtext": "vs audit",
        "icon": "ShieldCheck",
        "color": "fuchsia"
      },
      {
        "title": "UPTIME",
        "value": "92%",
        "change": "+0.4%",
        "subtext": "vs last mo",
        "icon": "Database",
        "color": "fuchsia"
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
                "metricA": 70,
                "metricB": 65
              },
              {
                "name": "M2",
                "metricA": 26,
                "metricB": 52
              },
              {
                "name": "M3",
                "metricA": 20,
                "metricB": 74
              },
              {
                "name": "M4",
                "metricA": 20,
                "metricB": 32
              },
              {
                "name": "M5",
                "metricA": 33,
                "metricB": 42
              },
              {
                "name": "M6",
                "metricA": 46,
                "metricB": 69
              },
              {
                "name": "M7",
                "metricA": 67,
                "metricB": 32
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Top Risks/Anomalies",
            "subtext": "Click a bar to focus (Top 7)",
            "badge": "Live view",
            "dataKey": [
              "metricA"
            ],
            "colors": [
              "url(#colorEmerald)"
            ],
            "data": [
              {
                "name": "M1",
                "metricA": 25
              },
              {
                "name": "M2",
                "metricA": 20
              },
              {
                "name": "M3",
                "metricA": 61
              },
              {
                "name": "M4",
                "metricA": 24
              },
              {
                "name": "M5",
                "metricA": 40
              },
              {
                "name": "M6",
                "metricA": 58
              },
              {
                "name": "M7",
                "metricA": 21
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
            "title": "Logistics Throughput",
            "subtext": "Daily volume processed",
            "badge": "Live view",
            "dataKey": [
              "volume"
            ],
            "colors": [
              "#818cf8"
            ],
            "data": [
              {
                "name": "M1",
                "volume": 73
              },
              {
                "name": "M2",
                "volume": 59
              },
              {
                "name": "M3",
                "volume": 37
              },
              {
                "name": "M4",
                "volume": 43
              },
              {
                "name": "M5",
                "volume": 74
              },
              {
                "name": "M6",
                "volume": 58
              },
              {
                "name": "M7",
                "volume": 22
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Vendor Delays",
            "subtext": "SLA breaches by vendor",
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
                "delays": 47
              },
              {
                "name": "M3",
                "delays": 23
              },
              {
                "name": "M4",
                "delays": 36
              },
              {
                "name": "M5",
                "delays": 74
              },
              {
                "name": "M6",
                "delays": 68
              },
              {
                "name": "M7",
                "delays": 63
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
            "title": "Audit Scores",
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
                "score": 47
              },
              {
                "name": "M2",
                "score": 20
              },
              {
                "name": "M3",
                "score": 66
              },
              {
                "name": "M4",
                "score": 49
              },
              {
                "name": "M5",
                "score": 25
              },
              {
                "name": "M6",
                "score": 52
              },
              {
                "name": "M7",
                "score": 61
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
                "incidents": 69
              },
              {
                "name": "M2",
                "incidents": 74
              },
              {
                "name": "M3",
                "incidents": 66
              },
              {
                "name": "M4",
                "incidents": 53
              },
              {
                "name": "M5",
                "incidents": 74
              },
              {
                "name": "M6",
                "incidents": 62
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
  "Insurance": {
    "title": "Insurance Operations",
    "subtitle": "Interactive analytics and key metrics overview.",
    "theme": "emerald",
    "kpis": [
      {
        "title": "OTIF / YIELD",
        "value": "92%",
        "change": "+0.2%",
        "subtext": "vs last mo",
        "icon": "Activity",
        "color": "emerald"
      },
      {
        "title": "LEAD TIME",
        "value": "21d",
        "change": "-1.6%",
        "subtext": "vs last mo",
        "icon": "Box",
        "color": "emerald"
      },
      {
        "title": "COMPLIANCE",
        "value": "91%",
        "change": "+1.5%",
        "subtext": "vs audit",
        "icon": "ShieldCheck",
        "color": "emerald"
      },
      {
        "title": "UPTIME",
        "value": "90%",
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
                "metricA": 39,
                "metricB": 41
              },
              {
                "name": "M2",
                "metricA": 36,
                "metricB": 46
              },
              {
                "name": "M3",
                "metricA": 31,
                "metricB": 74
              },
              {
                "name": "M4",
                "metricA": 68,
                "metricB": 59
              },
              {
                "name": "M5",
                "metricA": 56,
                "metricB": 29
              },
              {
                "name": "M6",
                "metricA": 55,
                "metricB": 70
              },
              {
                "name": "M7",
                "metricA": 25,
                "metricB": 25
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Top Risks/Anomalies",
            "subtext": "Click a bar to focus (Top 7)",
            "badge": "Live view",
            "dataKey": [
              "metricA"
            ],
            "colors": [
              "url(#colorEmerald)"
            ],
            "data": [
              {
                "name": "M1",
                "metricA": 59
              },
              {
                "name": "M2",
                "metricA": 40
              },
              {
                "name": "M3",
                "metricA": 28
              },
              {
                "name": "M4",
                "metricA": 35
              },
              {
                "name": "M5",
                "metricA": 56
              },
              {
                "name": "M6",
                "metricA": 62
              },
              {
                "name": "M7",
                "metricA": 25
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
            "title": "Logistics Throughput",
            "subtext": "Daily volume processed",
            "badge": "Live view",
            "dataKey": [
              "volume"
            ],
            "colors": [
              "#818cf8"
            ],
            "data": [
              {
                "name": "M1",
                "volume": 30
              },
              {
                "name": "M2",
                "volume": 71
              },
              {
                "name": "M3",
                "volume": 68
              },
              {
                "name": "M4",
                "volume": 45
              },
              {
                "name": "M5",
                "volume": 72
              },
              {
                "name": "M6",
                "volume": 77
              },
              {
                "name": "M7",
                "volume": 67
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Vendor Delays",
            "subtext": "SLA breaches by vendor",
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
                "delays": 71
              },
              {
                "name": "M3",
                "delays": 35
              },
              {
                "name": "M4",
                "delays": 21
              },
              {
                "name": "M5",
                "delays": 49
              },
              {
                "name": "M6",
                "delays": 73
              },
              {
                "name": "M7",
                "delays": 69
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
            "title": "Audit Scores",
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
                "score": 73
              },
              {
                "name": "M2",
                "score": 55
              },
              {
                "name": "M3",
                "score": 64
              },
              {
                "name": "M4",
                "score": 70
              },
              {
                "name": "M5",
                "score": 30
              },
              {
                "name": "M6",
                "score": 29
              },
              {
                "name": "M7",
                "score": 68
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
                "incidents": 70
              },
              {
                "name": "M2",
                "incidents": 35
              },
              {
                "name": "M3",
                "incidents": 44
              },
              {
                "name": "M4",
                "incidents": 43
              },
              {
                "name": "M5",
                "incidents": 72
              },
              {
                "name": "M6",
                "incidents": 40
              },
              {
                "name": "M7",
                "incidents": 69
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
        "title": "OTIF / YIELD",
        "value": "93%",
        "change": "+2.5%",
        "subtext": "vs last mo",
        "icon": "Activity",
        "color": "amber"
      },
      {
        "title": "LEAD TIME",
        "value": "36d",
        "change": "-0.1%",
        "subtext": "vs last mo",
        "icon": "Box",
        "color": "amber"
      },
      {
        "title": "COMPLIANCE",
        "value": "97%",
        "change": "+0.2%",
        "subtext": "vs audit",
        "icon": "ShieldCheck",
        "color": "amber"
      },
      {
        "title": "UPTIME",
        "value": "90%",
        "change": "+0.2%",
        "subtext": "vs last mo",
        "icon": "Database",
        "color": "amber"
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
                "metricA": 69,
                "metricB": 68
              },
              {
                "name": "M2",
                "metricA": 58,
                "metricB": 26
              },
              {
                "name": "M3",
                "metricA": 50,
                "metricB": 73
              },
              {
                "name": "M4",
                "metricA": 39,
                "metricB": 40
              },
              {
                "name": "M5",
                "metricA": 29,
                "metricB": 76
              },
              {
                "name": "M6",
                "metricA": 25,
                "metricB": 40
              },
              {
                "name": "M7",
                "metricA": 70,
                "metricB": 63
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Top Risks/Anomalies",
            "subtext": "Click a bar to focus (Top 7)",
            "badge": "Live view",
            "dataKey": [
              "metricA"
            ],
            "colors": [
              "url(#colorEmerald)"
            ],
            "data": [
              {
                "name": "M1",
                "metricA": 37
              },
              {
                "name": "M2",
                "metricA": 76
              },
              {
                "name": "M3",
                "metricA": 57
              },
              {
                "name": "M4",
                "metricA": 39
              },
              {
                "name": "M5",
                "metricA": 23
              },
              {
                "name": "M6",
                "metricA": 50
              },
              {
                "name": "M7",
                "metricA": 71
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
            "title": "Logistics Throughput",
            "subtext": "Daily volume processed",
            "badge": "Live view",
            "dataKey": [
              "volume"
            ],
            "colors": [
              "#818cf8"
            ],
            "data": [
              {
                "name": "M1",
                "volume": 39
              },
              {
                "name": "M2",
                "volume": 20
              },
              {
                "name": "M3",
                "volume": 62
              },
              {
                "name": "M4",
                "volume": 56
              },
              {
                "name": "M5",
                "volume": 29
              },
              {
                "name": "M6",
                "volume": 66
              },
              {
                "name": "M7",
                "volume": 70
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Vendor Delays",
            "subtext": "SLA breaches by vendor",
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
                "delays": 56
              },
              {
                "name": "M2",
                "delays": 55
              },
              {
                "name": "M3",
                "delays": 77
              },
              {
                "name": "M4",
                "delays": 22
              },
              {
                "name": "M5",
                "delays": 53
              },
              {
                "name": "M6",
                "delays": 77
              },
              {
                "name": "M7",
                "delays": 23
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
            "title": "Audit Scores",
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
                "score": 71
              },
              {
                "name": "M3",
                "score": 53
              },
              {
                "name": "M4",
                "score": 75
              },
              {
                "name": "M5",
                "score": 76
              },
              {
                "name": "M6",
                "score": 31
              },
              {
                "name": "M7",
                "score": 57
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
                "incidents": 56
              },
              {
                "name": "M3",
                "incidents": 47
              },
              {
                "name": "M4",
                "incidents": 43
              },
              {
                "name": "M5",
                "incidents": 33
              },
              {
                "name": "M6",
                "incidents": 70
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
  "Manufacturing": {
    "title": "Manufacturing Operations",
    "subtitle": "Interactive analytics and key metrics overview.",
    "theme": "rose",
    "kpis": [
      {
        "title": "OTIF / YIELD",
        "value": "81%",
        "change": "+2.5%",
        "subtext": "vs last mo",
        "icon": "Activity",
        "color": "rose"
      },
      {
        "title": "LEAD TIME",
        "value": "49d",
        "change": "-1.2%",
        "subtext": "vs last mo",
        "icon": "Box",
        "color": "rose"
      },
      {
        "title": "COMPLIANCE",
        "value": "98%",
        "change": "+1.6%",
        "subtext": "vs audit",
        "icon": "ShieldCheck",
        "color": "rose"
      },
      {
        "title": "UPTIME",
        "value": "95%",
        "change": "+0.1%",
        "subtext": "vs last mo",
        "icon": "Database",
        "color": "rose"
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
                "metricA": 63,
                "metricB": 22
              },
              {
                "name": "M2",
                "metricA": 30,
                "metricB": 47
              },
              {
                "name": "M3",
                "metricA": 54,
                "metricB": 77
              },
              {
                "name": "M4",
                "metricA": 78,
                "metricB": 50
              },
              {
                "name": "M5",
                "metricA": 29,
                "metricB": 75
              },
              {
                "name": "M6",
                "metricA": 21,
                "metricB": 48
              },
              {
                "name": "M7",
                "metricA": 48,
                "metricB": 27
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Top Risks/Anomalies",
            "subtext": "Click a bar to focus (Top 7)",
            "badge": "Live view",
            "dataKey": [
              "metricA"
            ],
            "colors": [
              "url(#colorEmerald)"
            ],
            "data": [
              {
                "name": "M1",
                "metricA": 70
              },
              {
                "name": "M2",
                "metricA": 46
              },
              {
                "name": "M3",
                "metricA": 28
              },
              {
                "name": "M4",
                "metricA": 71
              },
              {
                "name": "M5",
                "metricA": 63
              },
              {
                "name": "M6",
                "metricA": 39
              },
              {
                "name": "M7",
                "metricA": 53
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
            "title": "Logistics Throughput",
            "subtext": "Daily volume processed",
            "badge": "Live view",
            "dataKey": [
              "volume"
            ],
            "colors": [
              "#818cf8"
            ],
            "data": [
              {
                "name": "M1",
                "volume": 37
              },
              {
                "name": "M2",
                "volume": 26
              },
              {
                "name": "M3",
                "volume": 60
              },
              {
                "name": "M4",
                "volume": 27
              },
              {
                "name": "M5",
                "volume": 76
              },
              {
                "name": "M6",
                "volume": 23
              },
              {
                "name": "M7",
                "volume": 50
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Vendor Delays",
            "subtext": "SLA breaches by vendor",
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
                "delays": 73
              },
              {
                "name": "M2",
                "delays": 55
              },
              {
                "name": "M3",
                "delays": 21
              },
              {
                "name": "M4",
                "delays": 48
              },
              {
                "name": "M5",
                "delays": 45
              },
              {
                "name": "M6",
                "delays": 29
              },
              {
                "name": "M7",
                "delays": 51
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
            "title": "Audit Scores",
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
                "score": 57
              },
              {
                "name": "M2",
                "score": 51
              },
              {
                "name": "M3",
                "score": 56
              },
              {
                "name": "M4",
                "score": 69
              },
              {
                "name": "M5",
                "score": 35
              },
              {
                "name": "M6",
                "score": 61
              },
              {
                "name": "M7",
                "score": 58
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
                "incidents": 62
              },
              {
                "name": "M3",
                "incidents": 69
              },
              {
                "name": "M4",
                "incidents": 59
              },
              {
                "name": "M5",
                "incidents": 36
              },
              {
                "name": "M6",
                "incidents": 49
              },
              {
                "name": "M7",
                "incidents": 71
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
        "title": "OTIF / YIELD",
        "value": "81%",
        "change": "+0.1%",
        "subtext": "vs last mo",
        "icon": "Activity",
        "color": "indigo"
      },
      {
        "title": "LEAD TIME",
        "value": "50d",
        "change": "-0.1%",
        "subtext": "vs last mo",
        "icon": "Box",
        "color": "indigo"
      },
      {
        "title": "COMPLIANCE",
        "value": "96%",
        "change": "+0.1%",
        "subtext": "vs audit",
        "icon": "ShieldCheck",
        "color": "indigo"
      },
      {
        "title": "UPTIME",
        "value": "92%",
        "change": "+0.8%",
        "subtext": "vs last mo",
        "icon": "Database",
        "color": "indigo"
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
                "metricA": 25,
                "metricB": 79
              },
              {
                "name": "M2",
                "metricA": 68,
                "metricB": 49
              },
              {
                "name": "M3",
                "metricA": 29,
                "metricB": 46
              },
              {
                "name": "M4",
                "metricA": 74,
                "metricB": 78
              },
              {
                "name": "M5",
                "metricA": 76,
                "metricB": 50
              },
              {
                "name": "M6",
                "metricA": 78,
                "metricB": 60
              },
              {
                "name": "M7",
                "metricA": 38,
                "metricB": 66
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Top Risks/Anomalies",
            "subtext": "Click a bar to focus (Top 7)",
            "badge": "Live view",
            "dataKey": [
              "metricA"
            ],
            "colors": [
              "url(#colorEmerald)"
            ],
            "data": [
              {
                "name": "M1",
                "metricA": 43
              },
              {
                "name": "M2",
                "metricA": 50
              },
              {
                "name": "M3",
                "metricA": 29
              },
              {
                "name": "M4",
                "metricA": 79
              },
              {
                "name": "M5",
                "metricA": 76
              },
              {
                "name": "M6",
                "metricA": 21
              },
              {
                "name": "M7",
                "metricA": 27
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
            "title": "Logistics Throughput",
            "subtext": "Daily volume processed",
            "badge": "Live view",
            "dataKey": [
              "volume"
            ],
            "colors": [
              "#818cf8"
            ],
            "data": [
              {
                "name": "M1",
                "volume": 70
              },
              {
                "name": "M2",
                "volume": 40
              },
              {
                "name": "M3",
                "volume": 64
              },
              {
                "name": "M4",
                "volume": 62
              },
              {
                "name": "M5",
                "volume": 22
              },
              {
                "name": "M6",
                "volume": 48
              },
              {
                "name": "M7",
                "volume": 73
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Vendor Delays",
            "subtext": "SLA breaches by vendor",
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
                "delays": 67
              },
              {
                "name": "M3",
                "delays": 22
              },
              {
                "name": "M4",
                "delays": 78
              },
              {
                "name": "M5",
                "delays": 56
              },
              {
                "name": "M6",
                "delays": 37
              },
              {
                "name": "M7",
                "delays": 38
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
            "title": "Audit Scores",
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
                "score": 71
              },
              {
                "name": "M3",
                "score": 51
              },
              {
                "name": "M4",
                "score": 72
              },
              {
                "name": "M5",
                "score": 38
              },
              {
                "name": "M6",
                "score": 35
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
                "incidents": 64
              },
              {
                "name": "M2",
                "incidents": 78
              },
              {
                "name": "M3",
                "incidents": 36
              },
              {
                "name": "M4",
                "incidents": 56
              },
              {
                "name": "M5",
                "incidents": 76
              },
              {
                "name": "M6",
                "incidents": 68
              },
              {
                "name": "M7",
                "incidents": 60
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
        "title": "OTIF / YIELD",
        "value": "82%",
        "change": "+0.7%",
        "subtext": "vs last mo",
        "icon": "Activity",
        "color": "cyan"
      },
      {
        "title": "LEAD TIME",
        "value": "49d",
        "change": "-0.0%",
        "subtext": "vs last mo",
        "icon": "Box",
        "color": "cyan"
      },
      {
        "title": "COMPLIANCE",
        "value": "86%",
        "change": "+1.5%",
        "subtext": "vs audit",
        "icon": "ShieldCheck",
        "color": "cyan"
      },
      {
        "title": "UPTIME",
        "value": "97%",
        "change": "+0.4%",
        "subtext": "vs last mo",
        "icon": "Database",
        "color": "cyan"
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
                "metricA": 30,
                "metricB": 60
              },
              {
                "name": "M2",
                "metricA": 37,
                "metricB": 20
              },
              {
                "name": "M3",
                "metricA": 42,
                "metricB": 26
              },
              {
                "name": "M4",
                "metricA": 59,
                "metricB": 31
              },
              {
                "name": "M5",
                "metricA": 29,
                "metricB": 35
              },
              {
                "name": "M6",
                "metricA": 51,
                "metricB": 63
              },
              {
                "name": "M7",
                "metricA": 43,
                "metricB": 38
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Top Risks/Anomalies",
            "subtext": "Click a bar to focus (Top 7)",
            "badge": "Live view",
            "dataKey": [
              "metricA"
            ],
            "colors": [
              "url(#colorEmerald)"
            ],
            "data": [
              {
                "name": "M1",
                "metricA": 42
              },
              {
                "name": "M2",
                "metricA": 46
              },
              {
                "name": "M3",
                "metricA": 47
              },
              {
                "name": "M4",
                "metricA": 62
              },
              {
                "name": "M5",
                "metricA": 38
              },
              {
                "name": "M6",
                "metricA": 64
              },
              {
                "name": "M7",
                "metricA": 53
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
            "title": "Logistics Throughput",
            "subtext": "Daily volume processed",
            "badge": "Live view",
            "dataKey": [
              "volume"
            ],
            "colors": [
              "#818cf8"
            ],
            "data": [
              {
                "name": "M1",
                "volume": 55
              },
              {
                "name": "M2",
                "volume": 77
              },
              {
                "name": "M3",
                "volume": 52
              },
              {
                "name": "M4",
                "volume": 29
              },
              {
                "name": "M5",
                "volume": 77
              },
              {
                "name": "M6",
                "volume": 35
              },
              {
                "name": "M7",
                "volume": 78
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Vendor Delays",
            "subtext": "SLA breaches by vendor",
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
                "delays": 57
              },
              {
                "name": "M2",
                "delays": 22
              },
              {
                "name": "M3",
                "delays": 52
              },
              {
                "name": "M4",
                "delays": 77
              },
              {
                "name": "M5",
                "delays": 51
              },
              {
                "name": "M6",
                "delays": 71
              },
              {
                "name": "M7",
                "delays": 54
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
            "title": "Audit Scores",
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
                "score": 31
              },
              {
                "name": "M2",
                "score": 79
              },
              {
                "name": "M3",
                "score": 61
              },
              {
                "name": "M4",
                "score": 52
              },
              {
                "name": "M5",
                "score": 20
              },
              {
                "name": "M6",
                "score": 27
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
                "incidents": 56
              },
              {
                "name": "M2",
                "incidents": 73
              },
              {
                "name": "M3",
                "incidents": 49
              },
              {
                "name": "M4",
                "incidents": 78
              },
              {
                "name": "M5",
                "incidents": 75
              },
              {
                "name": "M6",
                "incidents": 22
              },
              {
                "name": "M7",
                "incidents": 60
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
        "title": "OTIF / YIELD",
        "value": "97%",
        "change": "+1.5%",
        "subtext": "vs last mo",
        "icon": "Activity",
        "color": "fuchsia"
      },
      {
        "title": "LEAD TIME",
        "value": "24d",
        "change": "-0.8%",
        "subtext": "vs last mo",
        "icon": "Box",
        "color": "fuchsia"
      },
      {
        "title": "COMPLIANCE",
        "value": "98%",
        "change": "+0.7%",
        "subtext": "vs audit",
        "icon": "ShieldCheck",
        "color": "fuchsia"
      },
      {
        "title": "UPTIME",
        "value": "91%",
        "change": "+0.1%",
        "subtext": "vs last mo",
        "icon": "Database",
        "color": "fuchsia"
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
                "metricA": 62,
                "metricB": 23
              },
              {
                "name": "M2",
                "metricA": 56,
                "metricB": 77
              },
              {
                "name": "M3",
                "metricA": 54,
                "metricB": 53
              },
              {
                "name": "M4",
                "metricA": 28,
                "metricB": 67
              },
              {
                "name": "M5",
                "metricA": 42,
                "metricB": 45
              },
              {
                "name": "M6",
                "metricA": 75,
                "metricB": 68
              },
              {
                "name": "M7",
                "metricA": 45,
                "metricB": 61
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Top Risks/Anomalies",
            "subtext": "Click a bar to focus (Top 7)",
            "badge": "Live view",
            "dataKey": [
              "metricA"
            ],
            "colors": [
              "url(#colorEmerald)"
            ],
            "data": [
              {
                "name": "M1",
                "metricA": 44
              },
              {
                "name": "M2",
                "metricA": 48
              },
              {
                "name": "M3",
                "metricA": 74
              },
              {
                "name": "M4",
                "metricA": 64
              },
              {
                "name": "M5",
                "metricA": 66
              },
              {
                "name": "M6",
                "metricA": 36
              },
              {
                "name": "M7",
                "metricA": 25
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
            "title": "Logistics Throughput",
            "subtext": "Daily volume processed",
            "badge": "Live view",
            "dataKey": [
              "volume"
            ],
            "colors": [
              "#818cf8"
            ],
            "data": [
              {
                "name": "M1",
                "volume": 63
              },
              {
                "name": "M2",
                "volume": 29
              },
              {
                "name": "M3",
                "volume": 43
              },
              {
                "name": "M4",
                "volume": 75
              },
              {
                "name": "M5",
                "volume": 43
              },
              {
                "name": "M6",
                "volume": 24
              },
              {
                "name": "M7",
                "volume": 58
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Vendor Delays",
            "subtext": "SLA breaches by vendor",
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
                "delays": 65
              },
              {
                "name": "M2",
                "delays": 34
              },
              {
                "name": "M3",
                "delays": 34
              },
              {
                "name": "M4",
                "delays": 50
              },
              {
                "name": "M5",
                "delays": 42
              },
              {
                "name": "M6",
                "delays": 21
              },
              {
                "name": "M7",
                "delays": 51
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
            "title": "Audit Scores",
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
                "score": 29
              },
              {
                "name": "M2",
                "score": 66
              },
              {
                "name": "M3",
                "score": 44
              },
              {
                "name": "M4",
                "score": 66
              },
              {
                "name": "M5",
                "score": 24
              },
              {
                "name": "M6",
                "score": 50
              },
              {
                "name": "M7",
                "score": 43
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
                "incidents": 61
              },
              {
                "name": "M2",
                "incidents": 65
              },
              {
                "name": "M3",
                "incidents": 73
              },
              {
                "name": "M4",
                "incidents": 78
              },
              {
                "name": "M5",
                "incidents": 40
              },
              {
                "name": "M6",
                "incidents": 74
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
  "Telecommunications": {
    "title": "Telecommunications Operations",
    "subtitle": "Interactive analytics and key metrics overview.",
    "theme": "emerald",
    "kpis": [
      {
        "title": "OTIF / YIELD",
        "value": "98%",
        "change": "+0.0%",
        "subtext": "vs last mo",
        "icon": "Activity",
        "color": "emerald"
      },
      {
        "title": "LEAD TIME",
        "value": "37d",
        "change": "-2.5%",
        "subtext": "vs last mo",
        "icon": "Box",
        "color": "emerald"
      },
      {
        "title": "COMPLIANCE",
        "value": "85%",
        "change": "+0.8%",
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
                "metricA": 48,
                "metricB": 62
              },
              {
                "name": "M2",
                "metricA": 78,
                "metricB": 76
              },
              {
                "name": "M3",
                "metricA": 28,
                "metricB": 35
              },
              {
                "name": "M4",
                "metricA": 32,
                "metricB": 22
              },
              {
                "name": "M5",
                "metricA": 72,
                "metricB": 45
              },
              {
                "name": "M6",
                "metricA": 30,
                "metricB": 43
              },
              {
                "name": "M7",
                "metricA": 44,
                "metricB": 46
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Top Risks/Anomalies",
            "subtext": "Click a bar to focus (Top 7)",
            "badge": "Live view",
            "dataKey": [
              "metricA"
            ],
            "colors": [
              "url(#colorEmerald)"
            ],
            "data": [
              {
                "name": "M1",
                "metricA": 67
              },
              {
                "name": "M2",
                "metricA": 53
              },
              {
                "name": "M3",
                "metricA": 35
              },
              {
                "name": "M4",
                "metricA": 68
              },
              {
                "name": "M5",
                "metricA": 67
              },
              {
                "name": "M6",
                "metricA": 27
              },
              {
                "name": "M7",
                "metricA": 50
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
            "title": "Logistics Throughput",
            "subtext": "Daily volume processed",
            "badge": "Live view",
            "dataKey": [
              "volume"
            ],
            "colors": [
              "#818cf8"
            ],
            "data": [
              {
                "name": "M1",
                "volume": 64
              },
              {
                "name": "M2",
                "volume": 58
              },
              {
                "name": "M3",
                "volume": 38
              },
              {
                "name": "M4",
                "volume": 76
              },
              {
                "name": "M5",
                "volume": 49
              },
              {
                "name": "M6",
                "volume": 48
              },
              {
                "name": "M7",
                "volume": 22
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Vendor Delays",
            "subtext": "SLA breaches by vendor",
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
                "delays": 73
              },
              {
                "name": "M3",
                "delays": 73
              },
              {
                "name": "M4",
                "delays": 43
              },
              {
                "name": "M5",
                "delays": 50
              },
              {
                "name": "M6",
                "delays": 34
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
        "name": "Compliance",
        "charts": [
          {
            "type": "LineChart",
            "title": "Audit Scores",
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
                "score": 66
              },
              {
                "name": "M3",
                "score": 61
              },
              {
                "name": "M4",
                "score": 70
              },
              {
                "name": "M5",
                "score": 70
              },
              {
                "name": "M6",
                "score": 62
              },
              {
                "name": "M7",
                "score": 50
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
                "incidents": 63
              },
              {
                "name": "M3",
                "incidents": 62
              },
              {
                "name": "M4",
                "incidents": 44
              },
              {
                "name": "M5",
                "incidents": 41
              },
              {
                "name": "M6",
                "incidents": 45
              },
              {
                "name": "M7",
                "incidents": 76
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
        "title": "OTIF / YIELD",
        "value": "93%",
        "change": "+1.5%",
        "subtext": "vs last mo",
        "icon": "Activity",
        "color": "amber"
      },
      {
        "title": "LEAD TIME",
        "value": "22d",
        "change": "-0.6%",
        "subtext": "vs last mo",
        "icon": "Box",
        "color": "amber"
      },
      {
        "title": "COMPLIANCE",
        "value": "87%",
        "change": "+0.0%",
        "subtext": "vs audit",
        "icon": "ShieldCheck",
        "color": "amber"
      },
      {
        "title": "UPTIME",
        "value": "91%",
        "change": "+0.0%",
        "subtext": "vs last mo",
        "icon": "Database",
        "color": "amber"
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
                "metricA": 65,
                "metricB": 42
              },
              {
                "name": "M2",
                "metricA": 59,
                "metricB": 39
              },
              {
                "name": "M3",
                "metricA": 44,
                "metricB": 37
              },
              {
                "name": "M4",
                "metricA": 68,
                "metricB": 78
              },
              {
                "name": "M5",
                "metricA": 35,
                "metricB": 22
              },
              {
                "name": "M6",
                "metricA": 56,
                "metricB": 74
              },
              {
                "name": "M7",
                "metricA": 46,
                "metricB": 49
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Top Risks/Anomalies",
            "subtext": "Click a bar to focus (Top 7)",
            "badge": "Live view",
            "dataKey": [
              "metricA"
            ],
            "colors": [
              "url(#colorEmerald)"
            ],
            "data": [
              {
                "name": "M1",
                "metricA": 55
              },
              {
                "name": "M2",
                "metricA": 23
              },
              {
                "name": "M3",
                "metricA": 66
              },
              {
                "name": "M4",
                "metricA": 35
              },
              {
                "name": "M5",
                "metricA": 48
              },
              {
                "name": "M6",
                "metricA": 21
              },
              {
                "name": "M7",
                "metricA": 40
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
            "title": "Logistics Throughput",
            "subtext": "Daily volume processed",
            "badge": "Live view",
            "dataKey": [
              "volume"
            ],
            "colors": [
              "#818cf8"
            ],
            "data": [
              {
                "name": "M1",
                "volume": 27
              },
              {
                "name": "M2",
                "volume": 65
              },
              {
                "name": "M3",
                "volume": 53
              },
              {
                "name": "M4",
                "volume": 69
              },
              {
                "name": "M5",
                "volume": 38
              },
              {
                "name": "M6",
                "volume": 34
              },
              {
                "name": "M7",
                "volume": 66
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Vendor Delays",
            "subtext": "SLA breaches by vendor",
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
                "delays": 32
              },
              {
                "name": "M2",
                "delays": 53
              },
              {
                "name": "M3",
                "delays": 71
              },
              {
                "name": "M4",
                "delays": 79
              },
              {
                "name": "M5",
                "delays": 31
              },
              {
                "name": "M6",
                "delays": 50
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
        "name": "Compliance",
        "charts": [
          {
            "type": "LineChart",
            "title": "Audit Scores",
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
                "score": 72
              },
              {
                "name": "M2",
                "score": 21
              },
              {
                "name": "M3",
                "score": 69
              },
              {
                "name": "M4",
                "score": 67
              },
              {
                "name": "M5",
                "score": 40
              },
              {
                "name": "M6",
                "score": 70
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
                "incidents": 61
              },
              {
                "name": "M2",
                "incidents": 79
              },
              {
                "name": "M3",
                "incidents": 68
              },
              {
                "name": "M4",
                "incidents": 60
              },
              {
                "name": "M5",
                "incidents": 25
              },
              {
                "name": "M6",
                "incidents": 31
              },
              {
                "name": "M7",
                "incidents": 78
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
                "revenue": 69
              },
              {
                "name": "M2",
                "revenue": 48
              },
              {
                "name": "M3",
                "revenue": 62
              },
              {
                "name": "M4",
                "revenue": 64
              },
              {
                "name": "M5",
                "revenue": 34
              },
              {
                "name": "M6",
                "revenue": 71
              },
              {
                "name": "M7",
                "revenue": 65
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
                "stock": 46
              },
              {
                "name": "M2",
                "stock": 26
              },
              {
                "name": "M3",
                "stock": 76
              },
              {
                "name": "M4",
                "stock": 36
              },
              {
                "name": "M5",
                "stock": 59
              },
              {
                "name": "M6",
                "stock": 74
              },
              {
                "name": "M7",
                "stock": 60
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
                "sales": 25
              },
              {
                "name": "M2",
                "sales": 37
              },
              {
                "name": "M3",
                "sales": 78
              },
              {
                "name": "M4",
                "sales": 39
              },
              {
                "name": "M5",
                "sales": 37
              },
              {
                "name": "M6",
                "sales": 46
              },
              {
                "name": "M7",
                "sales": 59
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
                "stockout": 25
              },
              {
                "name": "M2",
                "stockout": 20
              },
              {
                "name": "M3",
                "stockout": 60
              },
              {
                "name": "M4",
                "stockout": 29
              },
              {
                "name": "M5",
                "stockout": 74
              },
              {
                "name": "M6",
                "stockout": 45
              },
              {
                "name": "M7",
                "stockout": 34
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
        "title": "OTIF / YIELD",
        "value": "93%",
        "change": "+0.6%",
        "subtext": "vs last mo",
        "icon": "Activity",
        "color": "indigo"
      },
      {
        "title": "LEAD TIME",
        "value": "31d",
        "change": "-0.3%",
        "subtext": "vs last mo",
        "icon": "Box",
        "color": "indigo"
      },
      {
        "title": "COMPLIANCE",
        "value": "94%",
        "change": "+1.1%",
        "subtext": "vs audit",
        "icon": "ShieldCheck",
        "color": "indigo"
      },
      {
        "title": "UPTIME",
        "value": "90%",
        "change": "+0.2%",
        "subtext": "vs last mo",
        "icon": "Database",
        "color": "indigo"
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
                "metricB": 20
              },
              {
                "name": "M2",
                "metricA": 66,
                "metricB": 75
              },
              {
                "name": "M3",
                "metricA": 46,
                "metricB": 39
              },
              {
                "name": "M4",
                "metricA": 46,
                "metricB": 28
              },
              {
                "name": "M5",
                "metricA": 53,
                "metricB": 74
              },
              {
                "name": "M6",
                "metricA": 27,
                "metricB": 73
              },
              {
                "name": "M7",
                "metricA": 60,
                "metricB": 56
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Top Risks/Anomalies",
            "subtext": "Click a bar to focus (Top 7)",
            "badge": "Live view",
            "dataKey": [
              "metricA"
            ],
            "colors": [
              "url(#colorEmerald)"
            ],
            "data": [
              {
                "name": "M1",
                "metricA": 76
              },
              {
                "name": "M2",
                "metricA": 59
              },
              {
                "name": "M3",
                "metricA": 67
              },
              {
                "name": "M4",
                "metricA": 24
              },
              {
                "name": "M5",
                "metricA": 52
              },
              {
                "name": "M6",
                "metricA": 74
              },
              {
                "name": "M7",
                "metricA": 47
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
            "title": "Logistics Throughput",
            "subtext": "Daily volume processed",
            "badge": "Live view",
            "dataKey": [
              "volume"
            ],
            "colors": [
              "#818cf8"
            ],
            "data": [
              {
                "name": "M1",
                "volume": 34
              },
              {
                "name": "M2",
                "volume": 45
              },
              {
                "name": "M3",
                "volume": 73
              },
              {
                "name": "M4",
                "volume": 22
              },
              {
                "name": "M5",
                "volume": 20
              },
              {
                "name": "M6",
                "volume": 59
              },
              {
                "name": "M7",
                "volume": 47
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Vendor Delays",
            "subtext": "SLA breaches by vendor",
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
                "delays": 42
              },
              {
                "name": "M2",
                "delays": 25
              },
              {
                "name": "M3",
                "delays": 42
              },
              {
                "name": "M4",
                "delays": 39
              },
              {
                "name": "M5",
                "delays": 41
              },
              {
                "name": "M6",
                "delays": 24
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
        "name": "Compliance",
        "charts": [
          {
            "type": "LineChart",
            "title": "Audit Scores",
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
                "score": 38
              },
              {
                "name": "M2",
                "score": 56
              },
              {
                "name": "M3",
                "score": 60
              },
              {
                "name": "M4",
                "score": 71
              },
              {
                "name": "M5",
                "score": 37
              },
              {
                "name": "M6",
                "score": 71
              },
              {
                "name": "M7",
                "score": 60
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
                "incidents": 78
              },
              {
                "name": "M2",
                "incidents": 66
              },
              {
                "name": "M3",
                "incidents": 67
              },
              {
                "name": "M4",
                "incidents": 23
              },
              {
                "name": "M5",
                "incidents": 58
              },
              {
                "name": "M6",
                "incidents": 65
              },
              {
                "name": "M7",
                "incidents": 54
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
        "title": "OTIF / YIELD",
        "value": "88%",
        "change": "+1.6%",
        "subtext": "vs last mo",
        "icon": "Activity",
        "color": "cyan"
      },
      {
        "title": "LEAD TIME",
        "value": "27d",
        "change": "-1.0%",
        "subtext": "vs last mo",
        "icon": "Box",
        "color": "cyan"
      },
      {
        "title": "COMPLIANCE",
        "value": "87%",
        "change": "+1.8%",
        "subtext": "vs audit",
        "icon": "ShieldCheck",
        "color": "cyan"
      },
      {
        "title": "UPTIME",
        "value": "92%",
        "change": "+0.7%",
        "subtext": "vs last mo",
        "icon": "Database",
        "color": "cyan"
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
                "metricA": 24,
                "metricB": 41
              },
              {
                "name": "M2",
                "metricA": 51,
                "metricB": 54
              },
              {
                "name": "M3",
                "metricA": 72,
                "metricB": 63
              },
              {
                "name": "M4",
                "metricA": 78,
                "metricB": 42
              },
              {
                "name": "M5",
                "metricA": 30,
                "metricB": 75
              },
              {
                "name": "M6",
                "metricA": 23,
                "metricB": 65
              },
              {
                "name": "M7",
                "metricA": 76,
                "metricB": 61
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Top Risks/Anomalies",
            "subtext": "Click a bar to focus (Top 7)",
            "badge": "Live view",
            "dataKey": [
              "metricA"
            ],
            "colors": [
              "url(#colorEmerald)"
            ],
            "data": [
              {
                "name": "M1",
                "metricA": 73
              },
              {
                "name": "M2",
                "metricA": 56
              },
              {
                "name": "M3",
                "metricA": 71
              },
              {
                "name": "M4",
                "metricA": 24
              },
              {
                "name": "M5",
                "metricA": 66
              },
              {
                "name": "M6",
                "metricA": 20
              },
              {
                "name": "M7",
                "metricA": 76
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
            "title": "Logistics Throughput",
            "subtext": "Daily volume processed",
            "badge": "Live view",
            "dataKey": [
              "volume"
            ],
            "colors": [
              "#818cf8"
            ],
            "data": [
              {
                "name": "M1",
                "volume": 44
              },
              {
                "name": "M2",
                "volume": 29
              },
              {
                "name": "M3",
                "volume": 73
              },
              {
                "name": "M4",
                "volume": 20
              },
              {
                "name": "M5",
                "volume": 27
              },
              {
                "name": "M6",
                "volume": 73
              },
              {
                "name": "M7",
                "volume": 25
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Vendor Delays",
            "subtext": "SLA breaches by vendor",
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
                "delays": 44
              },
              {
                "name": "M2",
                "delays": 31
              },
              {
                "name": "M3",
                "delays": 26
              },
              {
                "name": "M4",
                "delays": 35
              },
              {
                "name": "M5",
                "delays": 38
              },
              {
                "name": "M6",
                "delays": 39
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
        "name": "Compliance",
        "charts": [
          {
            "type": "LineChart",
            "title": "Audit Scores",
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
                "score": 53
              },
              {
                "name": "M2",
                "score": 47
              },
              {
                "name": "M3",
                "score": 59
              },
              {
                "name": "M4",
                "score": 33
              },
              {
                "name": "M5",
                "score": 78
              },
              {
                "name": "M6",
                "score": 46
              },
              {
                "name": "M7",
                "score": 37
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
                "incidents": 50
              },
              {
                "name": "M3",
                "incidents": 72
              },
              {
                "name": "M4",
                "incidents": 47
              },
              {
                "name": "M5",
                "incidents": 21
              },
              {
                "name": "M6",
                "incidents": 30
              },
              {
                "name": "M7",
                "incidents": 70
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
        "title": "OTIF / YIELD",
        "value": "85%",
        "change": "+1.9%",
        "subtext": "vs last mo",
        "icon": "Activity",
        "color": "fuchsia"
      },
      {
        "title": "LEAD TIME",
        "value": "49d",
        "change": "-2.6%",
        "subtext": "vs last mo",
        "icon": "Box",
        "color": "fuchsia"
      },
      {
        "title": "COMPLIANCE",
        "value": "87%",
        "change": "+1.2%",
        "subtext": "vs audit",
        "icon": "ShieldCheck",
        "color": "fuchsia"
      },
      {
        "title": "UPTIME",
        "value": "93%",
        "change": "+0.2%",
        "subtext": "vs last mo",
        "icon": "Database",
        "color": "fuchsia"
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
                "metricA": 48,
                "metricB": 61
              },
              {
                "name": "M2",
                "metricA": 28,
                "metricB": 77
              },
              {
                "name": "M3",
                "metricA": 48,
                "metricB": 34
              },
              {
                "name": "M4",
                "metricA": 67,
                "metricB": 22
              },
              {
                "name": "M5",
                "metricA": 37,
                "metricB": 69
              },
              {
                "name": "M6",
                "metricA": 73,
                "metricB": 47
              },
              {
                "name": "M7",
                "metricA": 62,
                "metricB": 70
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Top Risks/Anomalies",
            "subtext": "Click a bar to focus (Top 7)",
            "badge": "Live view",
            "dataKey": [
              "metricA"
            ],
            "colors": [
              "url(#colorEmerald)"
            ],
            "data": [
              {
                "name": "M1",
                "metricA": 36
              },
              {
                "name": "M2",
                "metricA": 60
              },
              {
                "name": "M3",
                "metricA": 66
              },
              {
                "name": "M4",
                "metricA": 67
              },
              {
                "name": "M5",
                "metricA": 22
              },
              {
                "name": "M6",
                "metricA": 46
              },
              {
                "name": "M7",
                "metricA": 68
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
            "title": "Logistics Throughput",
            "subtext": "Daily volume processed",
            "badge": "Live view",
            "dataKey": [
              "volume"
            ],
            "colors": [
              "#818cf8"
            ],
            "data": [
              {
                "name": "M1",
                "volume": 69
              },
              {
                "name": "M2",
                "volume": 44
              },
              {
                "name": "M3",
                "volume": 52
              },
              {
                "name": "M4",
                "volume": 44
              },
              {
                "name": "M5",
                "volume": 48
              },
              {
                "name": "M6",
                "volume": 66
              },
              {
                "name": "M7",
                "volume": 29
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Vendor Delays",
            "subtext": "SLA breaches by vendor",
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
                "delays": 42
              },
              {
                "name": "M2",
                "delays": 76
              },
              {
                "name": "M3",
                "delays": 63
              },
              {
                "name": "M4",
                "delays": 58
              },
              {
                "name": "M5",
                "delays": 37
              },
              {
                "name": "M6",
                "delays": 59
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
        "name": "Compliance",
        "charts": [
          {
            "type": "LineChart",
            "title": "Audit Scores",
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
                "score": 40
              },
              {
                "name": "M2",
                "score": 78
              },
              {
                "name": "M3",
                "score": 50
              },
              {
                "name": "M4",
                "score": 35
              },
              {
                "name": "M5",
                "score": 37
              },
              {
                "name": "M6",
                "score": 20
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
                "incidents": 71
              },
              {
                "name": "M2",
                "incidents": 66
              },
              {
                "name": "M3",
                "incidents": 39
              },
              {
                "name": "M4",
                "incidents": 28
              },
              {
                "name": "M5",
                "incidents": 46
              },
              {
                "name": "M6",
                "incidents": 75
              },
              {
                "name": "M7",
                "incidents": 55
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
        "title": "OTIF / YIELD",
        "value": "93%",
        "change": "+2.5%",
        "subtext": "vs last mo",
        "icon": "Activity",
        "color": "emerald"
      },
      {
        "title": "LEAD TIME",
        "value": "53d",
        "change": "-1.2%",
        "subtext": "vs last mo",
        "icon": "Box",
        "color": "emerald"
      },
      {
        "title": "COMPLIANCE",
        "value": "91%",
        "change": "+1.6%",
        "subtext": "vs audit",
        "icon": "ShieldCheck",
        "color": "emerald"
      },
      {
        "title": "UPTIME",
        "value": "94%",
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
                "metricA": 39,
                "metricB": 48
              },
              {
                "name": "M2",
                "metricA": 22,
                "metricB": 71
              },
              {
                "name": "M3",
                "metricA": 41,
                "metricB": 49
              },
              {
                "name": "M4",
                "metricA": 22,
                "metricB": 65
              },
              {
                "name": "M5",
                "metricA": 25,
                "metricB": 66
              },
              {
                "name": "M6",
                "metricA": 34,
                "metricB": 40
              },
              {
                "name": "M7",
                "metricA": 32,
                "metricB": 33
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Top Risks/Anomalies",
            "subtext": "Click a bar to focus (Top 7)",
            "badge": "Live view",
            "dataKey": [
              "metricA"
            ],
            "colors": [
              "url(#colorEmerald)"
            ],
            "data": [
              {
                "name": "M1",
                "metricA": 47
              },
              {
                "name": "M2",
                "metricA": 58
              },
              {
                "name": "M3",
                "metricA": 48
              },
              {
                "name": "M4",
                "metricA": 79
              },
              {
                "name": "M5",
                "metricA": 78
              },
              {
                "name": "M6",
                "metricA": 31
              },
              {
                "name": "M7",
                "metricA": 46
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
            "title": "Logistics Throughput",
            "subtext": "Daily volume processed",
            "badge": "Live view",
            "dataKey": [
              "volume"
            ],
            "colors": [
              "#818cf8"
            ],
            "data": [
              {
                "name": "M1",
                "volume": 46
              },
              {
                "name": "M2",
                "volume": 30
              },
              {
                "name": "M3",
                "volume": 77
              },
              {
                "name": "M4",
                "volume": 20
              },
              {
                "name": "M5",
                "volume": 50
              },
              {
                "name": "M6",
                "volume": 72
              },
              {
                "name": "M7",
                "volume": 79
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Vendor Delays",
            "subtext": "SLA breaches by vendor",
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
                "delays": 76
              },
              {
                "name": "M2",
                "delays": 49
              },
              {
                "name": "M3",
                "delays": 66
              },
              {
                "name": "M4",
                "delays": 56
              },
              {
                "name": "M5",
                "delays": 38
              },
              {
                "name": "M6",
                "delays": 35
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
        "name": "Compliance",
        "charts": [
          {
            "type": "LineChart",
            "title": "Audit Scores",
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
                "score": 63
              },
              {
                "name": "M3",
                "score": 64
              },
              {
                "name": "M4",
                "score": 53
              },
              {
                "name": "M5",
                "score": 37
              },
              {
                "name": "M6",
                "score": 27
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
                "incidents": 76
              },
              {
                "name": "M2",
                "incidents": 34
              },
              {
                "name": "M3",
                "incidents": 34
              },
              {
                "name": "M4",
                "incidents": 60
              },
              {
                "name": "M5",
                "incidents": 28
              },
              {
                "name": "M6",
                "incidents": 43
              },
              {
                "name": "M7",
                "incidents": 67
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
        "title": "OTIF / YIELD",
        "value": "96%",
        "change": "+2.9%",
        "subtext": "vs last mo",
        "icon": "Activity",
        "color": "amber"
      },
      {
        "title": "LEAD TIME",
        "value": "52d",
        "change": "-2.0%",
        "subtext": "vs last mo",
        "icon": "Box",
        "color": "amber"
      },
      {
        "title": "COMPLIANCE",
        "value": "86%",
        "change": "+1.5%",
        "subtext": "vs audit",
        "icon": "ShieldCheck",
        "color": "amber"
      },
      {
        "title": "UPTIME",
        "value": "91%",
        "change": "+0.1%",
        "subtext": "vs last mo",
        "icon": "Database",
        "color": "amber"
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
                "metricA": 38,
                "metricB": 33
              },
              {
                "name": "M2",
                "metricA": 63,
                "metricB": 32
              },
              {
                "name": "M3",
                "metricA": 48,
                "metricB": 76
              },
              {
                "name": "M4",
                "metricA": 35,
                "metricB": 69
              },
              {
                "name": "M5",
                "metricA": 36,
                "metricB": 20
              },
              {
                "name": "M6",
                "metricA": 41,
                "metricB": 38
              },
              {
                "name": "M7",
                "metricA": 73,
                "metricB": 52
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Top Risks/Anomalies",
            "subtext": "Click a bar to focus (Top 7)",
            "badge": "Live view",
            "dataKey": [
              "metricA"
            ],
            "colors": [
              "url(#colorEmerald)"
            ],
            "data": [
              {
                "name": "M1",
                "metricA": 35
              },
              {
                "name": "M2",
                "metricA": 35
              },
              {
                "name": "M3",
                "metricA": 34
              },
              {
                "name": "M4",
                "metricA": 63
              },
              {
                "name": "M5",
                "metricA": 79
              },
              {
                "name": "M6",
                "metricA": 78
              },
              {
                "name": "M7",
                "metricA": 72
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
            "title": "Logistics Throughput",
            "subtext": "Daily volume processed",
            "badge": "Live view",
            "dataKey": [
              "volume"
            ],
            "colors": [
              "#818cf8"
            ],
            "data": [
              {
                "name": "M1",
                "volume": 64
              },
              {
                "name": "M2",
                "volume": 27
              },
              {
                "name": "M3",
                "volume": 45
              },
              {
                "name": "M4",
                "volume": 20
              },
              {
                "name": "M5",
                "volume": 27
              },
              {
                "name": "M6",
                "volume": 75
              },
              {
                "name": "M7",
                "volume": 65
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Vendor Delays",
            "subtext": "SLA breaches by vendor",
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
                "delays": 26
              },
              {
                "name": "M3",
                "delays": 64
              },
              {
                "name": "M4",
                "delays": 75
              },
              {
                "name": "M5",
                "delays": 20
              },
              {
                "name": "M6",
                "delays": 78
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
        "name": "Compliance",
        "charts": [
          {
            "type": "LineChart",
            "title": "Audit Scores",
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
                "score": 54
              },
              {
                "name": "M2",
                "score": 26
              },
              {
                "name": "M3",
                "score": 66
              },
              {
                "name": "M4",
                "score": 43
              },
              {
                "name": "M5",
                "score": 74
              },
              {
                "name": "M6",
                "score": 50
              },
              {
                "name": "M7",
                "score": 65
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
                "incidents": 51
              },
              {
                "name": "M2",
                "incidents": 54
              },
              {
                "name": "M3",
                "incidents": 29
              },
              {
                "name": "M4",
                "incidents": 28
              },
              {
                "name": "M5",
                "incidents": 74
              },
              {
                "name": "M6",
                "incidents": 35
              },
              {
                "name": "M7",
                "incidents": 30
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
        "title": "OTIF / YIELD",
        "value": "81%",
        "change": "+0.4%",
        "subtext": "vs last mo",
        "icon": "Activity",
        "color": "rose"
      },
      {
        "title": "LEAD TIME",
        "value": "24d",
        "change": "-2.0%",
        "subtext": "vs last mo",
        "icon": "Box",
        "color": "rose"
      },
      {
        "title": "COMPLIANCE",
        "value": "86%",
        "change": "+1.4%",
        "subtext": "vs audit",
        "icon": "ShieldCheck",
        "color": "rose"
      },
      {
        "title": "UPTIME",
        "value": "99%",
        "change": "+0.4%",
        "subtext": "vs last mo",
        "icon": "Database",
        "color": "rose"
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
                "metricA": 38,
                "metricB": 49
              },
              {
                "name": "M2",
                "metricA": 63,
                "metricB": 38
              },
              {
                "name": "M3",
                "metricA": 79,
                "metricB": 53
              },
              {
                "name": "M4",
                "metricA": 68,
                "metricB": 48
              },
              {
                "name": "M5",
                "metricA": 71,
                "metricB": 66
              },
              {
                "name": "M6",
                "metricA": 68,
                "metricB": 72
              },
              {
                "name": "M7",
                "metricA": 69,
                "metricB": 46
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Top Risks/Anomalies",
            "subtext": "Click a bar to focus (Top 7)",
            "badge": "Live view",
            "dataKey": [
              "metricA"
            ],
            "colors": [
              "url(#colorEmerald)"
            ],
            "data": [
              {
                "name": "M1",
                "metricA": 38
              },
              {
                "name": "M2",
                "metricA": 78
              },
              {
                "name": "M3",
                "metricA": 60
              },
              {
                "name": "M4",
                "metricA": 23
              },
              {
                "name": "M5",
                "metricA": 73
              },
              {
                "name": "M6",
                "metricA": 36
              },
              {
                "name": "M7",
                "metricA": 41
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
            "title": "Logistics Throughput",
            "subtext": "Daily volume processed",
            "badge": "Live view",
            "dataKey": [
              "volume"
            ],
            "colors": [
              "#818cf8"
            ],
            "data": [
              {
                "name": "M1",
                "volume": 66
              },
              {
                "name": "M2",
                "volume": 29
              },
              {
                "name": "M3",
                "volume": 70
              },
              {
                "name": "M4",
                "volume": 44
              },
              {
                "name": "M5",
                "volume": 79
              },
              {
                "name": "M6",
                "volume": 25
              },
              {
                "name": "M7",
                "volume": 61
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Vendor Delays",
            "subtext": "SLA breaches by vendor",
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
                "delays": 30
              },
              {
                "name": "M2",
                "delays": 74
              },
              {
                "name": "M3",
                "delays": 64
              },
              {
                "name": "M4",
                "delays": 32
              },
              {
                "name": "M5",
                "delays": 43
              },
              {
                "name": "M6",
                "delays": 35
              },
              {
                "name": "M7",
                "delays": 76
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
            "title": "Audit Scores",
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
                "score": 32
              },
              {
                "name": "M4",
                "score": 70
              },
              {
                "name": "M5",
                "score": 77
              },
              {
                "name": "M6",
                "score": 30
              },
              {
                "name": "M7",
                "score": 49
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
                "incidents": 57
              },
              {
                "name": "M2",
                "incidents": 75
              },
              {
                "name": "M3",
                "incidents": 79
              },
              {
                "name": "M4",
                "incidents": 52
              },
              {
                "name": "M5",
                "incidents": 74
              },
              {
                "name": "M6",
                "incidents": 50
              },
              {
                "name": "M7",
                "incidents": 29
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
        "title": "OTIF / YIELD",
        "value": "83%",
        "change": "+2.5%",
        "subtext": "vs last mo",
        "icon": "Activity",
        "color": "indigo"
      },
      {
        "title": "LEAD TIME",
        "value": "56d",
        "change": "-0.1%",
        "subtext": "vs last mo",
        "icon": "Box",
        "color": "indigo"
      },
      {
        "title": "COMPLIANCE",
        "value": "90%",
        "change": "+1.3%",
        "subtext": "vs audit",
        "icon": "ShieldCheck",
        "color": "indigo"
      },
      {
        "title": "UPTIME",
        "value": "96%",
        "change": "+0.2%",
        "subtext": "vs last mo",
        "icon": "Database",
        "color": "indigo"
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
                "metricA": 34,
                "metricB": 55
              },
              {
                "name": "M2",
                "metricA": 42,
                "metricB": 28
              },
              {
                "name": "M3",
                "metricA": 33,
                "metricB": 27
              },
              {
                "name": "M4",
                "metricA": 62,
                "metricB": 41
              },
              {
                "name": "M5",
                "metricA": 58,
                "metricB": 56
              },
              {
                "name": "M6",
                "metricA": 57,
                "metricB": 20
              },
              {
                "name": "M7",
                "metricA": 51,
                "metricB": 35
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Top Risks/Anomalies",
            "subtext": "Click a bar to focus (Top 7)",
            "badge": "Live view",
            "dataKey": [
              "metricA"
            ],
            "colors": [
              "url(#colorEmerald)"
            ],
            "data": [
              {
                "name": "M1",
                "metricA": 53
              },
              {
                "name": "M2",
                "metricA": 43
              },
              {
                "name": "M3",
                "metricA": 24
              },
              {
                "name": "M4",
                "metricA": 40
              },
              {
                "name": "M5",
                "metricA": 69
              },
              {
                "name": "M6",
                "metricA": 29
              },
              {
                "name": "M7",
                "metricA": 68
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
            "title": "Logistics Throughput",
            "subtext": "Daily volume processed",
            "badge": "Live view",
            "dataKey": [
              "volume"
            ],
            "colors": [
              "#818cf8"
            ],
            "data": [
              {
                "name": "M1",
                "volume": 33
              },
              {
                "name": "M2",
                "volume": 25
              },
              {
                "name": "M3",
                "volume": 53
              },
              {
                "name": "M4",
                "volume": 44
              },
              {
                "name": "M5",
                "volume": 32
              },
              {
                "name": "M6",
                "volume": 33
              },
              {
                "name": "M7",
                "volume": 33
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Vendor Delays",
            "subtext": "SLA breaches by vendor",
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
                "delays": 25
              },
              {
                "name": "M2",
                "delays": 60
              },
              {
                "name": "M3",
                "delays": 45
              },
              {
                "name": "M4",
                "delays": 64
              },
              {
                "name": "M5",
                "delays": 73
              },
              {
                "name": "M6",
                "delays": 22
              },
              {
                "name": "M7",
                "delays": 28
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
            "title": "Audit Scores",
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
                "score": 20
              },
              {
                "name": "M2",
                "score": 66
              },
              {
                "name": "M3",
                "score": 21
              },
              {
                "name": "M4",
                "score": 76
              },
              {
                "name": "M5",
                "score": 43
              },
              {
                "name": "M6",
                "score": 43
              },
              {
                "name": "M7",
                "score": 68
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
                "incidents": 68
              },
              {
                "name": "M3",
                "incidents": 61
              },
              {
                "name": "M4",
                "incidents": 68
              },
              {
                "name": "M5",
                "incidents": 33
              },
              {
                "name": "M6",
                "incidents": 60
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
  "MediaAndEntertainment": {
    "title": "Media And Entertainment Operations",
    "subtitle": "Interactive analytics and key metrics overview.",
    "theme": "cyan",
    "kpis": [
      {
        "title": "OTIF / YIELD",
        "value": "86%",
        "change": "+2.9%",
        "subtext": "vs last mo",
        "icon": "Activity",
        "color": "cyan"
      },
      {
        "title": "LEAD TIME",
        "value": "34d",
        "change": "-0.7%",
        "subtext": "vs last mo",
        "icon": "Box",
        "color": "cyan"
      },
      {
        "title": "COMPLIANCE",
        "value": "94%",
        "change": "+0.9%",
        "subtext": "vs audit",
        "icon": "ShieldCheck",
        "color": "cyan"
      },
      {
        "title": "UPTIME",
        "value": "96%",
        "change": "+0.5%",
        "subtext": "vs last mo",
        "icon": "Database",
        "color": "cyan"
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
                "metricA": 70,
                "metricB": 55
              },
              {
                "name": "M2",
                "metricA": 72,
                "metricB": 60
              },
              {
                "name": "M3",
                "metricA": 63,
                "metricB": 65
              },
              {
                "name": "M4",
                "metricA": 51,
                "metricB": 78
              },
              {
                "name": "M5",
                "metricA": 61,
                "metricB": 45
              },
              {
                "name": "M6",
                "metricA": 78,
                "metricB": 51
              },
              {
                "name": "M7",
                "metricA": 72,
                "metricB": 26
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Top Risks/Anomalies",
            "subtext": "Click a bar to focus (Top 7)",
            "badge": "Live view",
            "dataKey": [
              "metricA"
            ],
            "colors": [
              "url(#colorEmerald)"
            ],
            "data": [
              {
                "name": "M1",
                "metricA": 64
              },
              {
                "name": "M2",
                "metricA": 53
              },
              {
                "name": "M3",
                "metricA": 33
              },
              {
                "name": "M4",
                "metricA": 35
              },
              {
                "name": "M5",
                "metricA": 78
              },
              {
                "name": "M6",
                "metricA": 31
              },
              {
                "name": "M7",
                "metricA": 61
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
            "title": "Logistics Throughput",
            "subtext": "Daily volume processed",
            "badge": "Live view",
            "dataKey": [
              "volume"
            ],
            "colors": [
              "#818cf8"
            ],
            "data": [
              {
                "name": "M1",
                "volume": 51
              },
              {
                "name": "M2",
                "volume": 34
              },
              {
                "name": "M3",
                "volume": 65
              },
              {
                "name": "M4",
                "volume": 53
              },
              {
                "name": "M5",
                "volume": 64
              },
              {
                "name": "M6",
                "volume": 42
              },
              {
                "name": "M7",
                "volume": 26
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Vendor Delays",
            "subtext": "SLA breaches by vendor",
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
                "delays": 20
              },
              {
                "name": "M3",
                "delays": 79
              },
              {
                "name": "M4",
                "delays": 21
              },
              {
                "name": "M5",
                "delays": 28
              },
              {
                "name": "M6",
                "delays": 55
              },
              {
                "name": "M7",
                "delays": 52
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
            "title": "Audit Scores",
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
                "score": 42
              },
              {
                "name": "M2",
                "score": 24
              },
              {
                "name": "M3",
                "score": 72
              },
              {
                "name": "M4",
                "score": 23
              },
              {
                "name": "M5",
                "score": 37
              },
              {
                "name": "M6",
                "score": 69
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
                "incidents": 25
              },
              {
                "name": "M2",
                "incidents": 65
              },
              {
                "name": "M3",
                "incidents": 27
              },
              {
                "name": "M4",
                "incidents": 36
              },
              {
                "name": "M5",
                "incidents": 74
              },
              {
                "name": "M6",
                "incidents": 30
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
  "EnvironmentalServicesAndWasteManagement": {
    "title": "Environmental Services And Waste Management Operations",
    "subtitle": "Interactive analytics and key metrics overview.",
    "theme": "fuchsia",
    "kpis": [
      {
        "title": "OTIF / YIELD",
        "value": "84%",
        "change": "+2.1%",
        "subtext": "vs last mo",
        "icon": "Activity",
        "color": "fuchsia"
      },
      {
        "title": "LEAD TIME",
        "value": "50d",
        "change": "-0.6%",
        "subtext": "vs last mo",
        "icon": "Box",
        "color": "fuchsia"
      },
      {
        "title": "COMPLIANCE",
        "value": "91%",
        "change": "+0.2%",
        "subtext": "vs audit",
        "icon": "ShieldCheck",
        "color": "fuchsia"
      },
      {
        "title": "UPTIME",
        "value": "92%",
        "change": "+0.9%",
        "subtext": "vs last mo",
        "icon": "Database",
        "color": "fuchsia"
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
                "metricB": 69
              },
              {
                "name": "M2",
                "metricA": 34,
                "metricB": 61
              },
              {
                "name": "M3",
                "metricA": 70,
                "metricB": 38
              },
              {
                "name": "M4",
                "metricA": 68,
                "metricB": 67
              },
              {
                "name": "M5",
                "metricA": 70,
                "metricB": 66
              },
              {
                "name": "M6",
                "metricA": 55,
                "metricB": 75
              },
              {
                "name": "M7",
                "metricA": 57,
                "metricB": 43
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Top Risks/Anomalies",
            "subtext": "Click a bar to focus (Top 7)",
            "badge": "Live view",
            "dataKey": [
              "metricA"
            ],
            "colors": [
              "url(#colorEmerald)"
            ],
            "data": [
              {
                "name": "M1",
                "metricA": 63
              },
              {
                "name": "M2",
                "metricA": 61
              },
              {
                "name": "M3",
                "metricA": 23
              },
              {
                "name": "M4",
                "metricA": 54
              },
              {
                "name": "M5",
                "metricA": 24
              },
              {
                "name": "M6",
                "metricA": 31
              },
              {
                "name": "M7",
                "metricA": 33
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
            "title": "Logistics Throughput",
            "subtext": "Daily volume processed",
            "badge": "Live view",
            "dataKey": [
              "volume"
            ],
            "colors": [
              "#818cf8"
            ],
            "data": [
              {
                "name": "M1",
                "volume": 36
              },
              {
                "name": "M2",
                "volume": 73
              },
              {
                "name": "M3",
                "volume": 48
              },
              {
                "name": "M4",
                "volume": 26
              },
              {
                "name": "M5",
                "volume": 65
              },
              {
                "name": "M6",
                "volume": 79
              },
              {
                "name": "M7",
                "volume": 36
              }
            ]
          },
          {
            "type": "BarChart",
            "title": "Vendor Delays",
            "subtext": "SLA breaches by vendor",
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
                "delays": 47
              },
              {
                "name": "M2",
                "delays": 57
              },
              {
                "name": "M3",
                "delays": 50
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
                "delays": 73
              },
              {
                "name": "M7",
                "delays": 57
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
            "title": "Audit Scores",
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
                "score": 21
              },
              {
                "name": "M2",
                "score": 31
              },
              {
                "name": "M3",
                "score": 53
              },
              {
                "name": "M4",
                "score": 65
              },
              {
                "name": "M5",
                "score": 65
              },
              {
                "name": "M6",
                "score": 23
              },
              {
                "name": "M7",
                "score": 22
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
                "incidents": 72
              },
              {
                "name": "M2",
                "incidents": 42
              },
              {
                "name": "M3",
                "incidents": 40
              },
              {
                "name": "M4",
                "incidents": 41
              },
              {
                "name": "M5",
                "incidents": 47
              },
              {
                "name": "M6",
                "incidents": 56
              },
              {
                "name": "M7",
                "incidents": 20
              }
            ]
          }
        ]
      }
    ]
  }
};