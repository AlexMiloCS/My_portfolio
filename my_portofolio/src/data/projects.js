import { Database, Terminal, Map, ScatterChart, Calculator, Lock } from 'lucide-react';
import React from 'react';

export const projects = [
  {
    slug: 'food-hazard-nlp',
    featured: false,
    title: 'Food Hazard NLP Classification (SemEval-2025)',
    description: 'Developed an ensemble classification system (BERT, RoBERTa, SVM) to predict heavily imbalanced hazard categories from unstructured recall reports. Optimized hierarchical macro-F1 across 32 classes, outperforming classical ML baselines.',
    fullDescription: 'This project focuses on the SemEval-2025 task of classifying food hazard reports. We developed an ensemble NLP system utilizing state-of-the-art transformer models (BERT, RoBERTa) and traditional ML techniques (SVM) to handle heavily imbalanced, unstructured textual data. The model optimizes hierarchical macro-F1 across 32 distinct hazard classes.',
    tags: ['BERT', 'RoBERTa', 'Scikit-learn', 'Classification'],
    githubLink: 'https://github.com/AlexMiloCS',
    imagePlaceholder: 'bg-gradient-to-br from-cyan-900/40 to-slate-900',
    iconColorClass: 'text-blue-400',
    icon: <Database className="w-8 h-8 text-slate-400 group-hover:text-blue-400 transition-colors" />
  },
  {
    slug: 'KindOfMinesweeper',
    featured: false,
    title: 'Kind of Minesweeper',
    description: 'A custom, console-based Java game that flips the rules of classic Minesweeper into a competitive 2-player hunting game. Engineered with live score tracking, a smart grid system for adjacent mine calculation, and turn-based gameplay logic.',
    fullDescription: 'A custom, console-based Java game that flips the rules of classic Minesweeper on its head. Instead of trying to avoid mines, Kind of Minesweeper is a competitive 2-player hunting game. Players take turns revealing coordinates on a hidden grid; if you find a mine, you score a point! The game continues until all mines on the board have been discovered. The player with the highest score at the end wins the match.',
    tags: ['Java', 'OOP', 'Console App', 'Game Logic'],
    githubLink: 'https://github.com/AlexMiloCS/KindOfMinesweeper',
    imagePlaceholder: 'bg-gradient-to-br from-green-900/40 to-slate-900',
    iconColorClass: 'text-green-400',
    icon: <Terminal className="w-8 h-8 text-slate-400 group-hover:text-green-400 transition-colors" />
  },
  {
    slug: 'pathfinding-algorithms',
    featured: false,
    title: 'Pathfinding Algorithms: A* & UCS',
    description: 'A Java-based application that generates randomized labyrinths to visualize and compare pathfinding algorithms. Evaluates optimal cost-effective paths using Uniform Cost Search (UCS) and A* heuristic evaluation for comparative node expansion analysis.',
    fullDescription: 'A complete, Java-based console application that visualizes and compares pathfinding algorithms on a randomized grid. The project generates a labyrinth with varying terrain heights and obstacles, then finds the optimal cost-effective path from a starting position to one of two potential goals using Uniform Cost Search (UCS) and A* (A-Star). Runs both UCS and A* sequentially to allow for comparison of node expansion and execution efficiency.',
    tags: ['Java', 'Algorithms', 'Pathfinding', 'A* / UCS'],
    githubLink: 'https://github.com/AlexMiloCS/Ucs_A-Star_Algorithms',
    imagePlaceholder: 'bg-gradient-to-br from-yellow-900/40 to-slate-900',
    iconColorClass: 'text-yellow-400',
    icon: <Map className="w-8 h-8 text-slate-400 group-hover:text-yellow-400 transition-colors" />
  },
  {
    slug: 'kmeans-clustering',
    featured: false,
    title: 'K-Means Clustering Visualization in Java',
    description: 'A custom Java implementation of the K-Means clustering algorithm featuring synthetic spatial data generation and JFreeChart visualizations.',
    fullDescription: 'A custom, from-scratch implementation of the K-Means clustering algorithm in Java. This project generates synthetic 2D spatial data, applies the K-Means algorithm to find optimal cluster centers, and visualizes the results using graphical scatter plots. Features multiple cluster testing (K=3,6,9,12) and algorithmic optimization to avoid local minima by running iterations and selecting the lowest variance.',
    tags: ['Java', 'Machine Learning', 'Clustering', 'JFreeChart'],
    githubLink: 'https://github.com/AlexMiloCS/Kmeans',
    imagePlaceholder: 'bg-gradient-to-br from-purple-900/40 to-slate-900',
    iconColorClass: 'text-purple-400',
    icon: <ScatterChart className="w-8 h-8 text-slate-400 group-hover:text-purple-400 transition-colors" />
  },
  {
    slug: 'morris-counter',
    featured: false,
    title: 'Morris Counter Analysis',
    description: 'A Python implementation and statistical analysis of the Morris Counter, a probabilistic data structure for approximate counting. Includes multi-counter and generalized base variants.',
    fullDescription: 'A Python-based implementation and statistical analysis of the Morris Counter, a probabilistic data structure used to count large events using very little memory (logarithmic space). This project explores the standard algorithm, improves its accuracy using multiple counters (mean/median averaging), generalizes the mathematical base for fine-tuned precision, and mathematically calculates the exact state probabilities.',
    tags: ['Python', 'Statistics', 'Jupyter', 'Algorithms'],
    githubLink: 'https://github.com/AlexMiloCS/Morris-Counter',
    imagePlaceholder: 'bg-gradient-to-br from-orange-900/40 to-slate-900',
    iconColorClass: 'text-orange-400',
    icon: <Calculator className="w-8 h-8 text-slate-400 group-hover:text-orange-400 transition-colors" />
  },
  {
    slug: 'prufer-cryptography',
    featured: false,
    title: 'Prüfer Sequence Cryptography',
    description: 'A Python implementation that secures a communication network (represented as a tree graph) by encoding it into a Prüfer sequence and encrypting it.',
    fullDescription: 'A Python tool that encodes agent communication trees into Prüfer sequences, applies shift-cipher encryption to the sequence, and decodes it back to the original graph. It dynamically maps string-based agent names to integer IDs, identifies leaf nodes to iteratively reduce the tree into an n-2 integer sequence, and fully restores the exact tree edges during decryption.',
    tags: ['Python', 'Cryptography', 'Algorithms', 'Graph Theory'],
    githubLink: 'https://github.com/AlexMiloCS/Prufer-Cryptography',
    imagePlaceholder: 'bg-gradient-to-br from-red-900/40 to-slate-900',
    iconColorClass: 'text-red-400',
    icon: <Lock className="w-8 h-8 text-slate-400 group-hover:text-red-400 transition-colors" />
  }
];
