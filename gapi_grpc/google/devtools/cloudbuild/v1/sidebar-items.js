initSidebarItems({"mod":[["artifacts",""],["build",""],["build_options",""],["build_trigger",""],["cloud_build_client","Generated client implementations."],["git_hub_events_config",""],["hash",""],["pubsub_config",""],["pull_request_filter",""],["push_filter",""],["repo_source",""],["source",""],["worker_pool",""]],"struct":[["ArtifactResult","An artifact that was uploaded during a build. This is a single record in the artifact manifest JSON file."],["Artifacts","Artifacts produced by a build that should be uploaded upon successful completion of all build steps."],["Build","A build resource in the Cloud Build API."],["BuildOperationMetadata","Metadata for build operations."],["BuildOptions","Optional arguments to enable specific features of builds."],["BuildStep","A step in the build pipeline."],["BuildTrigger","Configuration for an automated build in response to source repository changes."],["BuiltImage","An image built by the pipeline."],["CancelBuildRequest","Request to cancel an ongoing build."],["CreateBuildRequest","Request to create a new build."],["CreateBuildTriggerRequest","Request to create a new `BuildTrigger`."],["CreateWorkerPoolRequest","Request to create a new `WorkerPool`."],["DeleteBuildTriggerRequest","Request to delete a `BuildTrigger`."],["DeleteWorkerPoolRequest","Request to delete a `WorkerPool`."],["FileHashes","Container message for hashes of byte content of files, used in SourceProvenance messages to verify integrity of source input to the build."],["GetBuildRequest","Request to get a build."],["GetBuildTriggerRequest","Returns the `BuildTrigger` with the specified ID."],["GetWorkerPoolRequest","Request to get a `WorkerPool` with the specified name."],["GitHubEventsConfig","GitHubEventsConfig describes the configuration of a trigger that creates a build whenever a GitHub event is received."],["Hash","Container message for hash values."],["InlineSecret","Pairs a set of secret environment variables mapped to encrypted values with the Cloud KMS key to use to decrypt the value."],["ListBuildTriggersRequest","Request to list existing `BuildTriggers`."],["ListBuildTriggersResponse","Response containing existing `BuildTriggers`."],["ListBuildsRequest","Request to list builds."],["ListBuildsResponse","Response including listed builds."],["ListWorkerPoolsRequest","Request to list `WorkerPools`."],["ListWorkerPoolsResponse","Response containing existing `WorkerPools`."],["Network","Network describes the GCP network used to create workers in."],["PubsubConfig","PubsubConfig describes the configuration of a trigger that creates a build whenever a Pub/Sub message is published."],["PullRequestFilter","PullRequestFilter contains filter properties for matching GitHub Pull Requests."],["PushFilter","Push contains filter properties for matching GitHub git pushes."],["ReceiveTriggerWebhookRequest","ReceiveTriggerWebhookRequest [Experimental] is the request object accepted by the ReceiveTriggerWebhook method."],["ReceiveTriggerWebhookResponse","ReceiveTriggerWebhookResponse [Experimental] is the response object for the ReceiveTriggerWebhook method."],["RepoSource","Location of the source in a Google Cloud Source Repository."],["Results","Artifacts created by the build pipeline."],["RetryBuildRequest","Specifies a build to retry."],["RunBuildTriggerRequest","Specifies a build trigger to run and the source to use."],["Secret","Pairs a set of secret environment variables containing encrypted values with the Cloud KMS key to use to decrypt the value. Note: Use `kmsKeyName` with  `available_secrets` instead of using `kmsKeyName` with `secret`. For instructions see: https://cloud.google.com/cloud-build/docs/securing-builds/use-encrypted-credentials."],["SecretManagerSecret","Pairs a secret environment variable with a SecretVersion in Secret Manager."],["Secrets","Secrets and secret environment variables."],["Source","Location of the source in a supported storage service."],["SourceProvenance","Provenance of the source. Ways to find the original source, or verify that some source was used for this build."],["StorageSource","Location of the source in an archive file in Google Cloud Storage."],["StorageSourceManifest","Location of the source manifest in Google Cloud Storage. This feature is in Preview."],["TimeSpan","Start and end times for a build execution phase."],["UpdateBuildTriggerRequest","Request to update an existing `BuildTrigger`."],["UpdateWorkerPoolRequest","Request to update a `WorkerPool`."],["Volume","Volume describes a Docker container volume which is mounted into build steps in order to persist files across build step execution."],["WorkerConfig","WorkerConfig defines the configuration to be used for a creating workers in the pool."],["WorkerPool","Configuration for a WorkerPool to run the builds."]]});