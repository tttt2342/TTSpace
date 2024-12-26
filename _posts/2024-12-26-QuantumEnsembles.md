---
layout: post
title: Quantum Ensembles
date: 2024-12-26 11:12:00-0400
description: Statistical Mechanics Notes 
tags: StatisticalMechanics
related_posts: false
---

#### Statistical Calculator
Definition of statistical calculator $\rho$:

\begin{equation}
\hat\rho = \sum_{i} |\psi_i>P_i<\psi_i| , (\sum_{i} P_i = 1)
\end{equation}

Especially, for pure states:
$$
\hat\rho = |\psi_i><\psi_i|
$$

The statistical calculator has following properties:
1. The trace of statistical calculator $\hat\rho$ equals to 1. i.e.
\begin{equation}
tr\hat\rho = \sum_{n}\rho_{nn} = \sum_{n}<\phi_n|\hat\rho|\phi_n>=\sum_{i}<\psi_i|\sum_{n}|\phi_n><\phi_n|\psi_i>P_i=\sum_{i}P_i=1
\end{equation}
3. 
