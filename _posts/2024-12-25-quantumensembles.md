---
layout: post
title: Quantum Ensembles
date: 2024-12-25 11:12:00+0800
description: Statistical Mechanics Notes 
tags: StatisticalMechanics
related_posts: false
---


### Statistical Operator
Definition of statistical operatpr $$\rho$$:

\begin{equation}
\hat\rho = \sum_{i} |\psi_i\rangle P_i \langle \psi_i| , (\sum_{i} P_i = 1)
\end{equation}

Especially, for pure states:
\begin{equation}
\hat\rho = |\psi_i\rangle\langle\psi_i|
\end{equation}

The statistical calculator has following properties:
1. The trace of statistical operator $$\hat\rho$$ equals to 1. i.e.
\begin{equation}
tr\hat\rho = \sum_{n}\rho_{nn} = \sum_{n}\langle\phi_n|\hat\rho|\phi_n\rangle=\sum_{i}\langle\psi_i|\sum_{n}|\phi_n\rangle\langle\phi_n|\psi_i\rangle P_i=\sum_{i}P_i=1
\end{equation}
2. The trace of the square of $$\hat\rho$$:

\begin{equation}
\begin{cases}
  \ tr\hat\rho^2<1&, & \text{ for mixed ensembles} \\
  \ tr\hat\rho^2=1&, & \text{ for pure ensembles} 
\end{cases}
\end{equation}

3. The statistical operator is Hermitian calculator, thus its eigen value must be real.

### Liouville's Theorem
In classical statistical mechanics, we have Liouville's theorm, which claims that a conserved mechanics system with $$N$$ particles in $$\Gamma$$ space, its state density $$D(p,q,t)$$ is conserved while moving. The math expression of this theorem is
\begin{equation}
\label{LT}
\frac{dD(p,q,t)}{dt}=\frac{\partial D(p,q,t)}{\partial t}+\lbrace D,H\rbrace=0
\end{equation}
And the poisson bracket is
\begin{equation}
\lbrace D,H\rbrace = \sum_{i=1}^s (\frac{\partial D}{\partial q_i}\frac{\partial H}{\partial p_i}-\frac{\partial D}{\partial p_i}\frac{\partial H}{\partial q_i})
\end{equation}
When the system is under statistical equilibrium, the state density would be independent of time. Thus from \eqref{LT} we have 
\begin{equation}
\lbrace D,H\rbrace = 0
\end{equation}

If we want to find out the quantum version Liouville's Theorem, we can write statistical operator under Schrodinger frame
\begin{equation}
\hat\rho(t) = \sum_{i} |\psi_i(t)\rangle P_i\langle\psi_i(t)|
\end{equation}
From the Schrodinger equation that is followed by $$|\psi_i(t)>$$, we can derive the quantum Liouville's theorem with similiar method:
\begin{equation}
[\hat H, \hat\rho]=0
\end{equation}
This illustrates that $$\hat\rho$$ and $$\hat H$$ are commutated, thus statistical operator is a motion integral.

## Quantum Ensemble Theory

### Microcanonical Ensembles
**Definition:** An isolated system without energy and particle exchange with external environment. As there is no system does not exchange energy completely, we define such systems as those with little energy change from $$E$$ to $$E+\Delta E$$.

We have two basic assumption in statistical physics:
  1. The system can be located on every microstate in the energy shell.
  2. Those probabilities on each states are equal.

##### Statistical Operator
On those assumption we can write the matrix elements of $$\hat\rho$$ (Density matrix):
\begin{equation}
\rho_{nm} = P_n \delta_{nm}
\end{equation}
$$P_n$$ is the probability that eigen vector $$|\Phi_n\rangle$$ appears. As probabilities are equal, we have
\begin{equation}
P_n=
\begin{cases}
  \frac{1}{\Omega (E)},& E<E_n<E+\Delta E \\
  0,& \text{otherwise}
\end{cases}
\end{equation}
$$E_n$$ is the eigen energy of system.\\
So the statistical operator is
\begin{equation}
\label{sc-of-mce}
\hat\rho = \sum_{n} |\Phi_n\rangle P_n\langle\Phi_n | = \frac{1}{\Omega (E)}
\end{equation}
And its trace
\begin{equation}
tr\hat\rho = \sum_{n\prime} \sum_{n} \langle\Phi_{n'}|\Phi_n\rangle P_n\langle\Phi_n | \Phi_{n'}\rangle = \sum_{n'} \frac{1}{\Omega (E)}=1
\end{equation}
##### Physical Quantities

##### Entropy
With statistical operator, the average of any physical quantity can be calculated by $$\langle \hat A \rangle = tr(\hat\rho \hat A)$$. Now what we need to do is defining the entropy that equal to the classical value. So we define following entropy operator:
\begin{equation}
\hat S = -k_B \ln \hat\rho
\end{equation}
The average value of it is
\begin{equation}
S=\langle \hat S\rangle = -k_B \sum_{n}\frac{1}{\Omega (E)} \ln \frac{1}{\Omega (E)} = k_B\ln \Omega (E)
\end{equation}
which is completely the same with the classical formula. 

### Canonical Ensembles
##### Statistical Operator
From the classical formula:
\begin{equation}
P_i = \frac{1}{Z} e^{-\beta E_i}
\end{equation}
we can write the statistical operator of canonical ensembles
\begin{equation}
\hat\rho = \sum_{i} |\psi_\rangle P_i \langle \psi_i | = \frac{1}{Z} e^{-\hat H /k_B T}
\end{equation}
where $$Z$$ is the partition function of canonical ensembles.

##### Partition Function
The partition function is
\begin{equation}
Z=Z(T,V,N)=tr(e^{-\hat H / k_B T})
\end{equation}
##### Physical Quantities
So the average of physical quantities of canonical ensembles can be calculated with
\begin{equation}
\langle \hat A\rangle = tr(\hat\rho \hat A)= tr(\hat A\frac{1}{Z}e^{-\beta\hat H})
\end{equation}
##### Free Energy
The basic thermodynamics quantity, free energy, is defined as
\begin{equation}
F(T,V,N)= -\beta^{-1}\ln Z=-k_B T \ln Z
\end{equation}
which is the same with the classical statistical physics.
### Grand Canonical Ensembles
##### Statistical Calculator
Also from the classical formula:
\begin{equation}
\begin{aligned}
\hat\rho &= \sum_{n,N} |\Psi_n(N)\rangle P_{n,N}\langle\Psi_n(N) | \\
&=\frac{1}{\Xi}e^{-(\hat H - \mu \hat N)/k_B T}
\end{aligned}
\end{equation}
where $$\Xi$$ is the grand partition function
##### Grand Partition Function
The partition function of grand canonical ensemble is
\begin{equation}
\Xi = \sum_{n,N}e^{-(E_n - \mu N)/k_B T} = tr(e^{-(\hat H - \mu \hat N)/k_B T})
\end{equation}
And it is always be written into another form:
\begin{equation}
\Xi (T,V,\mu) = \sum_{n,N} z^N Z_N (T,V)
\end{equation}
where $$Z_N (T,V) = \sum_{n}e^{-E_n/k_B T}$$, is the partition function of canonical ensemble that has fixed particle number. And $$z = e^{\mu/k_B T}$$ is called fugacity.

##### Physical Quantities
The average of any physical quantity is
\begin{equation}
\langle \hat A\rangle = \frac{1}{\Xi}tr(\hat A e^{-(\hat H-\mu \hat N)/k_B T})
\end{equation}
##### Grand Potential (Thermodynamic Potential)
The basic thermodynamic quantity defined in grand canonical ensembles is the grand potential:
\begin{equation}
J(T,V,\mu)=-k_B T\ln \Xi (T,V,\mu)
\end{equation}

