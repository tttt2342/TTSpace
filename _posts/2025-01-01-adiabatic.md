---
layout: post
title: Adiabatic Approximation
date: 2025-01-01 12:12:00+0800
description: Quantum Mechanics Notes 
tags: 
categories: QuantumMechanics
related_posts: false
---

### Adiabatic Theorem
#### Adiabatic Process
The aidbatic process is defined as that with external condition changing slowly. 
There are two characteristic times: $$T_i$$ is the "internal" time, representing the motion of system itself (such as the period of a single pendulum); $$T_e$$ is the external time, representing the time needed for system parameters to change significantly (such as the motion of the fixed point of a pendulum).
Adiabatic process requires $$T_e >> T_i$$

The basic method to anylyze an adiabatic process is condidering external parameters as constant, only variable at the last of calculation. 
It can be expressed as the adiabatictheorem below.\
Assume Hamiltonian change from initial value $$H^i$$ to $$H^f$$ slowly. If a particle under the $$n$$ order eigen state of $$H^i$$, it will evolve to the $$n$$ order eigen state of $$H^f$$ (following Schrodinger Equation).

#### Proof of Adiabatic Process
We know the solution to TDSE under time-independent Hamiltonian is
\begin{equation}
\label{10.12}
\Psi(t) = \sum_n c_n(t)\psi_n(t)e^{i\theta_n(t)}
\end{equation}
where
\begin{equation}
\theta_n(t) = -\frac{1}{\hbar}\int_0^t E_n(t')dt'.
\end{equation}
Substitute equation\eqref{10.12} into TDSE, we obtain
\begin{equation}
\sum_n \dot c_n \psi_n e^{i\theta_n} = -\sum_n c_n \dot\psi_n e^{i\theta_n}
\end{equation}
Take the inner product with $$\psi_m$$,
\begin{equation}
\sum_n \dot c_n \delta_{mn} e^{i\theta_n} = -\sum_n c_n\langle \psi_m | \dot\psi_n \rangle e^{i\theta_n} 
\end{equation}
That is
\begin{equation}
\label{10.16}
\dot c_m(t) = -\sum_n c_n \langle \psi_m |\dot\psi_n \rangle e^{i(\theta_n- \theta_m)}.
\end{equation}
Now take the differential of the eigen equation of $$H$$:
\begin{equation}
\dot H \psi_n+H_n \dot\psi_n=\dot E_n \psi_n +E_n \dot\psi_n
\end{equation}
Take the inner product with $$\psi_m$$ again and use the Hermitian of $$H$$:
\begin{equation}
\langle \psi_m |\dot H |psi_n\rangle = (E_n-E_m)\langle\psi_m | \dot\psi_n\rangle
\end{equation}
Substitute this equation into eqref{10.16}, and do the adiabatic approximation ($$\dot H $$ is very small) to ignore the second term, we can obatin:
\begin{equation}
\dot c_m(t) = -c_m \langle\psi_m |\dot\psi_m,
\end{equation}
with the solution
\begin{equation}
c_m(t) = c_m(0) e^{i\gamma_m (t)}
\end{equation}
where $$\gamma_m(t) = i\int_0^t \langle \psi_m(t') | \frac{\partial}{\partial t'}\psi_m(t') \rangle dt'$$.
Specially, if the particle is under the $$n$$th eigen state ($$c_n(0)=1$$), then
\begin{equation}
\Psi_n(t)=e^{i\theta_n(t) t} e^{i\gamma_n(t)} \psi_n(t)
\end{equation}
Thus it is still under the $$n$$th eigen state, with a phase factor added. (QED) 
### Berry Phase

