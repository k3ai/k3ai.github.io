---
sidebar_position: 1
---

# Quick Start

Let's discover **K3ai in three simple steps**.

## Getting Started

Get started by **download k3ai** from the release page [here](https://github.com/k3ai/releases).

Or **try K3ai companion script** using this command:

```bash
curl -LO https://get.k3ai.in | sh -
```

## Load K3ai configuration

Let's start loading the configuration:

```shell
k3ai up
```

:::caution

FIrst time k3ai run will ask for a **Github PAT (Personal Access Token)** that we will use to avoid API calls limitations.  Check [`Github Documentation`](#) to learn how to create one. Your personal GH PAT only need `read repository permission`.

:::

## Configure the base infrastructure

Choose your favourite `Kubernetes` flavor and run it:

To know which K8s flavors are available

```shell
k3ai cluster list --all
```

it should print something like:

```markdown
┌─────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ INFRASTRUCTURE                                                                                          │
├───────┬─────────────────────────────────────────────────────┬───────┬────────┬─────────┬────────────────┤
│ TYPE  │ DESCRIPTION                                         │ KIND  │ TAG    │ VERSION │ STATUS         │
├───────┼─────────────────────────────────────────────────────┼───────┼────────┼─────────┼────────────────┤
│ CIVO  │ The First Cloud Native Service Provider Power...    │ infra │ cloud  │ latest  │ Available      │
├───────┼─────────────────────────────────────────────────────┼───────┼────────┼─────────┼────────────────┤
│ EKS-A │ Amazon Eks Anywhere Is A New Deployment Option...   │ infra │ hybrid │ v0.5.0  │ Available      │
│       │ ate And Operate Kubernetes Clusters On Custome...   │       │        │         │                │
├───────┼─────────────────────────────────────────────────────┼───────┼────────┼─────────┼────────────────┤
│ K3S   │ K3s Is A Highly Available, Certified Kubernetes...  │ infra │ local  │ latest  │ Available      │
│       │ oads In Unattended, Resource-Constrained...         │       │        │         │                │
├───────┼─────────────────────────────────────────────────────┼───────┼────────┼─────────┼────────────────┤
│ KIND  │ Kind Is A Tool For Running Local Kubernetes...      │ infra │ local  │ v0.11.2 │ Available      │
│       │ as Primarily Designed For Testing Kubernetes...     │       │        │         │                │
│       │  Or Ci.                                             │       │        │         │                │
├───────┼─────────────────────────────────────────────────────┼───────┼────────┼─────────┼────────────────┤
│ TANZU │ Tanzu Community Edition Is A Fully-Featured...      │ infra │ hybrid │ latest  │ In Development │
│       │ ers And Users. It Is A Freely Available...          │       │        │         │                │
│       │  Of Vmware Tanzu.                                   │       │        │         │                │
└───────┴─────────────────────────────────────────────────────┴───────┴────────┴─────────┴────────────────┘
```

Now let start with something super fast and super simple:

<!-- ```bash
k3ai [COMMAND] [ACTION] [CHOICE] [SUB-CHOICE]
```
where:

- **K3AI [COMMAND]** : I want to do something with a `cluster` or a `plugin`
- **[ACTION]** : I want to deploy a `cluster` or a `plugin`
- **[CHOICE]** I want a specific type of a `cluster`. This could be shortened into `-t`
- **[SUB- CHOICE]** I want to identify later the `cluster` with this name. This could be shortened into `-n`
So in our case will be: -->

```bash
k3ai cluster deploy --type k3s --n mycluster
```

## Install a plugin to do our AI experimentations

Now that the server is up and running let's type:

```bash
k3ai plugin deploy -n mlflow -t mycluster
```

K3ai will print the url where you may access to the MLFLow tracking server at the end of the installation.
That's all now just start having fun with K3ai!

