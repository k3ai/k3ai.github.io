---
id: mlflow
title: MLFlow Tutorial
---

# Train a model with K3ai and MLFLow

In this simple tutorial we will run one of the public examples of MLFlow (xgboost) using K3ai. We assume the following:

- The machine to be used is running Linux
- The machine does not have anything installed if not just the basic Operating System
- `K3ai up` has been executed. If not please take a look at the quick-start documentation page.

## Step1 - Deploy the infrastructure

First we have to deploy a new cluster. For this tutorial we will use Rancher K3S. We selected K3s due its light footprint so it adapt better to, almost, any
environment.

We will type:

```bash

k3ai cluster deploy -t k3s -n myk3scluster

```

:::note

Currently (v1.0.1) we do not support Rancher K3s deployment on WSL2. In order to use it, please user K3d.

:::

Once the cluster will be deployed we may proceed to the step 2.

## Step 2 - Deploy MLFlow on the cluster

K3ai allow the user to deploy any plugin on any deployed target cluster in one single command.

```bash
k3ai plugin deploy -n mlflow -t myk3scluster

```
The deployment will publish the URL where to connect to the UI of MLFLOW.

:::caution

Please not that not all clusters supported by K3ai are currently able to expose the URL correctly. If the URL is not reachable please consult the platform documentation
to learn how to expose it (typically through a port-forward). In v1.0.1 we will make this automatic

:::

Now let's move to the last step.

## Step 3 - Run the training and track the result


We will run a copy of the Xgboost example from [here](https://github.com/mlflow/mlflow/tree/master/examples/xgboost)

Simply run:

```bash
k3ai run -s https://github.com/k3ai/quickstart -b mlflow

```

wait for the deployment to complete and check the results on the MLFlow UI. 

Done, you completed the MLFLOW tutorial on how to run a simple training with K3ai and MLFLow. Now take your examples and have fun!