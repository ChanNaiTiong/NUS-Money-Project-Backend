# My CI/CD Project

## Goals:

1. To containerise the backend web application server so that:
   * it can be easily deployed to the cloud.
   * it can be scaled easily depending on demand.

2. To automate as much as possible the pipeline from release of a new software version:
   * Build - All the code are in running in interpreter mode under node.js runtime. So no need to build.
   * Package - To containerise it for deployment.
   * Deploy - Deploy it to a server in the cloud.
   * Monitor - Perhap in the future ??

## What has been achieved:

1. Successfully containerised my NUS Money backend. Run & tested on cloud shell editor machine.
2. Created a shell script, pipeline.sh, to automate the creation and running of container on cloud shell editor machine.

## What is next:

1. To extend the automation to publishing the container to Docker Hub.
2. To deploy to Google Cloud.
3. To investigate Kubernetes for Auto-Scaling.
