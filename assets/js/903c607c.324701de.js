"use strict";(self.webpackChunkk3ai_github_io=self.webpackChunkk3ai_github_io||[]).push([[618],{1281:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var n=a(7462),l=a(3366),o=(a(7294),a(3905)),i=["components"],r={id:"mlflow",title:"MLFlow Tutorial"},s="Train a model with K3ai and MLFLow",u={unversionedId:"tutorials/mlflow",id:"tutorials/mlflow",isDocsHomePage:!1,title:"MLFlow Tutorial",description:"In this simple tutorial we will run one of the public examples of MLFlow (xgboost) using K3ai. We assume the following:",source:"@site/docs/tutorials/mlflow.md",sourceDirName:"tutorials",slug:"/tutorials/mlflow",permalink:"/docs/tutorials/mlflow",editUrl:"https://github.com/k3ai/k3ai/docs/tutorials/mlflow.md",tags:[],version:"current",frontMatter:{id:"mlflow",title:"MLFlow Tutorial"},sidebar:"tutorialSidebar",previous:{title:"Kubeflow Tutorial",permalink:"/docs/tutorials/kubeflow"}},p=[{value:"Step1 - Deploy the infrastructure",id:"step1---deploy-the-infrastructure",children:[],level:2},{value:"Step 2 - Deploy MLFlow on the cluster",id:"step-2---deploy-mlflow-on-the-cluster",children:[],level:2},{value:"Step 3 - Run the training and track the result",id:"step-3---run-the-training-and-track-the-result",children:[],level:2}],m={toc:p};function d(e){var t=e.components,a=(0,l.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"train-a-model-with-k3ai-and-mlflow"},"Train a model with K3ai and MLFLow"),(0,o.kt)("p",null,"In this simple tutorial we will run one of the public examples of MLFlow (xgboost) using K3ai. We assume the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The machine to be used is running Linux"),(0,o.kt)("li",{parentName:"ul"},"The machine does not have anything installed if not just the basic Operating System"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"K3ai up")," has been executed. If not please take a look at the quick-start documentation page.")),(0,o.kt)("h2",{id:"step1---deploy-the-infrastructure"},"Step1 - Deploy the infrastructure"),(0,o.kt)("p",null,"First we have to deploy a new cluster. For this tutorial we will use Rancher K3S. We selected K3s due its light footprint so it adapt better to, almost, any\nenvironment."),(0,o.kt)("p",null,"We will type:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\nk3ai cluster deploy -t k3s -n myk3scluster\n\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Currently (v1.0.0) we do not support Rancher K3s deployment on WSL2. In order to use it, please run the K3s binary manually."))),(0,o.kt)("p",null,"Once the cluster will be deployed we may proceed to the step 2."),(0,o.kt)("h2",{id:"step-2---deploy-mlflow-on-the-cluster"},"Step 2 - Deploy MLFlow on the cluster"),(0,o.kt)("p",null,"K3ai allow the user to deploy any plugin on any deployed target cluster in one single command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"k3ai plugin deploy -n mlflow -t myk3scluster\n\n")),(0,o.kt)("p",null,"The deployment will publish the URL where to connect to the UI of MLFLOW."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Please not that not all clusters supported by K3ai are currently able to expose the URL correctly. If the URL is not reachable please consult the platform documentation\nto learn how to expose it (typically through a port-forward). In v1.0.1 we will make this automatic"))),(0,o.kt)("p",null,"Now let's move to the last step."),(0,o.kt)("h2",{id:"step-3---run-the-training-and-track-the-result"},"Step 3 - Run the training and track the result"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Before we may run the example there is a manual step (yeah we know it's annoying but we are working on it).\nOpen your local terminal (where you are running the cluster) and do something like:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\nsudo mkdir /mnt/data/minio/mlflow\n\n")))),(0,o.kt)("p",null,"We will run a copy of the Xgboost example from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mlflow/mlflow/tree/master/examples/xgboost"},"here")),(0,o.kt)("p",null,"Simply run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"k3ai run -s https://github.com/k3ai/quickstart -b mlflow\n\n")),(0,o.kt)("p",null,"wait for the deployment to complete and check the results on the MLFlow UI. "),(0,o.kt)("p",null,"Done, you completed the MLFLOW tutorial on how to run a simple training with K3ai and MLFLow. Now take your examples and have fun!"))}d.isMDXComponent=!0}}]);