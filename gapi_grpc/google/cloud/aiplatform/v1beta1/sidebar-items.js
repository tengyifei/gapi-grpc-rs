initSidebarItems({"enum":[["AcceleratorType","Represents a hardware accelerator type."],["JobState","Describes the state of a job."],["PipelineState","Describes the state of a pipeline."]],"mod":[["active_learning_config",""],["batch_prediction_job",""],["dataset_service_client","Generated client implementations."],["deployed_model",""],["endpoint_service_client","Generated client implementations."],["explanation_metadata",""],["explanation_parameters",""],["export_data_config",""],["export_model_operation_metadata",""],["export_model_request",""],["feature_noise_sigma",""],["import_data_config",""],["input_data_config",""],["job_service_client","Generated client implementations."],["measurement",""],["migratable_resource",""],["migrate_resource_request",""],["migrate_resource_response",""],["migration_service_client","Generated client implementations."],["model",""],["model_evaluation_slice",""],["model_service_client","Generated client implementations."],["pipeline_service_client","Generated client implementations."],["prediction_service_client","Generated client implementations."],["sample_config",""],["schema",""],["smooth_grad_config",""],["specialist_pool_service_client","Generated client implementations."],["study_spec",""],["trial",""],["user_action_reference",""],["worker_pool_spec",""]],"struct":[["ActiveLearningConfig","Paramaters that configure active learning pipeline. Active learning will label the data incrementally by several iterations. For every iteration, it will select a batch of data based on the sampling strategy."],["Annotation","Used to assign specific AnnotationSpec to a particular area of a DataItem or the whole part of the DataItem."],["AnnotationSpec","Identifies a concept with which DataItems may be annotated with."],["Attribution","Attribution that explains a particular prediction output."],["AutomaticResources","A description of resources that to large degree are decided by AI Platform, and require only a modest additional configuration. Each Model supporting these resources documents its specific guidelines."],["BatchDedicatedResources","A description of resources that are used for performing batch operations, are dedicated to a Model, and need manual configuration."],["BatchMigrateResourcesOperationMetadata","Runtime operation information for [MigrationService.BatchMigrateResources][google.cloud.aiplatform.v1beta1.MigrationService.BatchMigrateResources]."],["BatchMigrateResourcesRequest","Request message for [MigrationService.BatchMigrateResources][google.cloud.aiplatform.v1beta1.MigrationService.BatchMigrateResources]."],["BatchMigrateResourcesResponse","Response message for [MigrationService.BatchMigrateResources][google.cloud.aiplatform.v1beta1.MigrationService.BatchMigrateResources]."],["BatchPredictionJob","A job that uses a [Model][google.cloud.aiplatform.v1beta1.BatchPredictionJob.model] to produce predictions on multiple [input instances][google.cloud.aiplatform.v1beta1.BatchPredictionJob.input_config]. If predictions for significant portion of the instances fail, the job may finish without attempting predictions for all remaining instances."],["BigQueryDestination","The BigQuery location for the output content."],["BigQuerySource","The BigQuery location for the input content."],["CancelBatchPredictionJobRequest","Request message for [JobService.CancelBatchPredictionJob][google.cloud.aiplatform.v1beta1.JobService.CancelBatchPredictionJob]."],["CancelCustomJobRequest","Request message for [JobService.CancelCustomJob][google.cloud.aiplatform.v1beta1.JobService.CancelCustomJob]."],["CancelDataLabelingJobRequest","Request message for [DataLabelingJobService.CancelDataLabelingJob][]."],["CancelHyperparameterTuningJobRequest","Request message for [JobService.CancelHyperparameterTuningJob][google.cloud.aiplatform.v1beta1.JobService.CancelHyperparameterTuningJob]."],["CancelTrainingPipelineRequest","Request message for [PipelineService.CancelTrainingPipeline][google.cloud.aiplatform.v1beta1.PipelineService.CancelTrainingPipeline]."],["CompletionStats","Success and error statistics of processing multiple entities (for example, DataItems or structured data rows) in batch."],["ContainerRegistryDestination","The Container Regsitry location for the container image."],["ContainerSpec","The spec of a Container."],["CreateBatchPredictionJobRequest","Request message for [JobService.CreateBatchPredictionJob][google.cloud.aiplatform.v1beta1.JobService.CreateBatchPredictionJob]."],["CreateCustomJobRequest","Request message for [JobService.CreateCustomJob][google.cloud.aiplatform.v1beta1.JobService.CreateCustomJob]."],["CreateDataLabelingJobRequest","Request message for [DataLabelingJobService.CreateDataLabelingJob][]."],["CreateDatasetOperationMetadata","Runtime operation information for [DatasetService.CreateDataset][google.cloud.aiplatform.v1beta1.DatasetService.CreateDataset]."],["CreateDatasetRequest","Request message for [DatasetService.CreateDataset][google.cloud.aiplatform.v1beta1.DatasetService.CreateDataset]."],["CreateEndpointOperationMetadata","Runtime operation information for [EndpointService.CreateEndpoint][google.cloud.aiplatform.v1beta1.EndpointService.CreateEndpoint]."],["CreateEndpointRequest","Request message for [EndpointService.CreateEndpoint][google.cloud.aiplatform.v1beta1.EndpointService.CreateEndpoint]."],["CreateHyperparameterTuningJobRequest","Request message for [JobService.CreateHyperparameterTuningJob][google.cloud.aiplatform.v1beta1.JobService.CreateHyperparameterTuningJob]."],["CreateSpecialistPoolOperationMetadata","Runtime operation information for [SpecialistPoolService.CreateSpecialistPool][google.cloud.aiplatform.v1beta1.SpecialistPoolService.CreateSpecialistPool]."],["CreateSpecialistPoolRequest","Request message for [SpecialistPoolService.CreateSpecialistPool][google.cloud.aiplatform.v1beta1.SpecialistPoolService.CreateSpecialistPool]."],["CreateTrainingPipelineRequest","Request message for [PipelineService.CreateTrainingPipeline][google.cloud.aiplatform.v1beta1.PipelineService.CreateTrainingPipeline]."],["CustomJob","Represents a job that runs custom workloads such as a Docker container or a Python package. A CustomJob can have multiple worker pools and each worker pool can have its own machine and input spec. A CustomJob will be cleaned up once the job enters terminal state (failed or succeeded)."],["CustomJobSpec","Represents the spec of a CustomJob."],["DataItem","A piece of data in a Dataset. Could be an image, a video, a document or plain text."],["DataLabelingJob","DataLabelingJob is used to trigger a human labeling job on unlabeled data from the following Dataset:"],["Dataset","A collection of DataItems and Annotations on them."],["DedicatedResources","A description of resources that are dedicated to a DeployedModel, and that need a higher degree of manual configuration."],["DeleteBatchPredictionJobRequest","Request message for [JobService.DeleteBatchPredictionJob][google.cloud.aiplatform.v1beta1.JobService.DeleteBatchPredictionJob]."],["DeleteCustomJobRequest","Request message for [JobService.DeleteCustomJob][google.cloud.aiplatform.v1beta1.JobService.DeleteCustomJob]."],["DeleteDataLabelingJobRequest","Request message for [JobService.DeleteDataLabelingJob][google.cloud.aiplatform.v1beta1.JobService.DeleteDataLabelingJob]."],["DeleteDatasetRequest","Request message for [DatasetService.DeleteDataset][google.cloud.aiplatform.v1beta1.DatasetService.DeleteDataset]."],["DeleteEndpointRequest","Request message for [EndpointService.DeleteEndpoint][google.cloud.aiplatform.v1beta1.EndpointService.DeleteEndpoint]."],["DeleteHyperparameterTuningJobRequest","Request message for [JobService.DeleteHyperparameterTuningJob][google.cloud.aiplatform.v1beta1.JobService.DeleteHyperparameterTuningJob]."],["DeleteModelRequest","Request message for [ModelService.DeleteModel][google.cloud.aiplatform.v1beta1.ModelService.DeleteModel]."],["DeleteOperationMetadata","Details of operations that perform deletes of any entities."],["DeleteSpecialistPoolRequest","Request message for [SpecialistPoolService.DeleteSpecialistPool][google.cloud.aiplatform.v1beta1.SpecialistPoolService.DeleteSpecialistPool]."],["DeleteTrainingPipelineRequest","Request message for [PipelineService.DeleteTrainingPipeline][google.cloud.aiplatform.v1beta1.PipelineService.DeleteTrainingPipeline]."],["DeployModelOperationMetadata","Runtime operation information for [EndpointService.DeployModel][google.cloud.aiplatform.v1beta1.EndpointService.DeployModel]."],["DeployModelRequest","Request message for [EndpointService.DeployModel][google.cloud.aiplatform.v1beta1.EndpointService.DeployModel]."],["DeployModelResponse","Response message for [EndpointService.DeployModel][google.cloud.aiplatform.v1beta1.EndpointService.DeployModel]."],["DeployedModel","A deployment of a Model. Endpoints contain one or more DeployedModels."],["DeployedModelRef","Points to a DeployedModel."],["DiskSpec","Represents the spec of disk options."],["Endpoint","Models are deployed into it, and afterwards Endpoint is called to obtain predictions and explanations."],["EnvVar","Represents an environment variable present in a Container or Python Module."],["ExplainRequest","Request message for [PredictionService.Explain][google.cloud.aiplatform.v1beta1.PredictionService.Explain]."],["ExplainResponse","Response message for [PredictionService.Explain][google.cloud.aiplatform.v1beta1.PredictionService.Explain]."],["Explanation","Explanation of a prediction (provided in [PredictResponse.predictions][google.cloud.aiplatform.v1beta1.PredictResponse.predictions]) produced by the Model on a given [instance][google.cloud.aiplatform.v1beta1.ExplainRequest.instances]."],["ExplanationMetadata","Metadata describing the Model's input and output for explanation."],["ExplanationParameters","Parameters to configure explaining for Model's predictions."],["ExplanationSpec","Specification of Model explanation."],["ExportDataConfig","Describes what part of the Dataset is to be exported, the destination of the export and how to export."],["ExportDataOperationMetadata","Runtime operation information for [DatasetService.ExportData][google.cloud.aiplatform.v1beta1.DatasetService.ExportData]."],["ExportDataRequest","Request message for [DatasetService.ExportData][google.cloud.aiplatform.v1beta1.DatasetService.ExportData]."],["ExportDataResponse","Response message for [DatasetService.ExportData][google.cloud.aiplatform.v1beta1.DatasetService.ExportData]."],["ExportModelOperationMetadata","Details of [ModelService.ExportModel][google.cloud.aiplatform.v1beta1.ModelService.ExportModel] operation."],["ExportModelRequest","Request message for [ModelService.ExportModel][google.cloud.aiplatform.v1beta1.ModelService.ExportModel]."],["ExportModelResponse","Response message of [ModelService.ExportModel][google.cloud.aiplatform.v1beta1.ModelService.ExportModel] operation."],["FeatureNoiseSigma","Noise sigma by features. Noise sigma represents the standard deviation of the gaussian kernel that will be used to add noise to interpolated inputs prior to computing gradients."],["FilterSplit","Assigns input data to training, validation, and test sets based on the given filters, data pieces not matched by any filter are ignored. Currently only supported for Datasets containing DataItems. If any of the filters in this message are to match nothing, then they can be set as '-' (the minus sign)."],["FractionSplit","Assigns the input data to training, validation, and test sets as per the given fractions. Any of `training_fraction`, `validation_fraction` and `test_fraction` may optionally be provided, they must sum to up to 1. If the provided ones sum to less than 1, the remainder is assigned to sets as decided by AI Platform. If none of the fractions are set, by default roughly 80% of data will be used for training, 10% for validation, and 10% for test."],["GcsDestination","The Google Cloud Storage location where the output is to be written to."],["GcsSource","The Google Cloud Storage location for the input content."],["GenericOperationMetadata","Generic Metadata shared by all operations."],["GetAnnotationSpecRequest","Request message for [DatasetService.GetAnnotationSpec][google.cloud.aiplatform.v1beta1.DatasetService.GetAnnotationSpec]."],["GetBatchPredictionJobRequest","Request message for [JobService.GetBatchPredictionJob][google.cloud.aiplatform.v1beta1.JobService.GetBatchPredictionJob]."],["GetCustomJobRequest","Request message for [JobService.GetCustomJob][google.cloud.aiplatform.v1beta1.JobService.GetCustomJob]."],["GetDataLabelingJobRequest","Request message for [DataLabelingJobService.GetDataLabelingJob][]."],["GetDatasetRequest","Request message for [DatasetService.GetDataset][google.cloud.aiplatform.v1beta1.DatasetService.GetDataset]."],["GetEndpointRequest","Request message for [EndpointService.GetEndpoint][google.cloud.aiplatform.v1beta1.EndpointService.GetEndpoint]"],["GetHyperparameterTuningJobRequest","Request message for [JobService.GetHyperparameterTuningJob][google.cloud.aiplatform.v1beta1.JobService.GetHyperparameterTuningJob]."],["GetModelEvaluationRequest","Request message for [ModelService.GetModelEvaluation][google.cloud.aiplatform.v1beta1.ModelService.GetModelEvaluation]."],["GetModelEvaluationSliceRequest","Request message for [ModelService.GetModelEvaluationSlice][google.cloud.aiplatform.v1beta1.ModelService.GetModelEvaluationSlice]."],["GetModelRequest","Request message for [ModelService.GetModel][google.cloud.aiplatform.v1beta1.ModelService.GetModel]."],["GetSpecialistPoolRequest","Request message for [SpecialistPoolService.GetSpecialistPool][google.cloud.aiplatform.v1beta1.SpecialistPoolService.GetSpecialistPool]."],["GetTrainingPipelineRequest","Request message for [PipelineService.GetTrainingPipeline][google.cloud.aiplatform.v1beta1.PipelineService.GetTrainingPipeline]."],["HyperparameterTuningJob","Represents a HyperparameterTuningJob. A HyperparameterTuningJob has a Study specification and multiple CustomJobs with identical CustomJob specification."],["ImportDataConfig","Describes the location from where we import data into a Dataset, together with the labels that will be applied to the DataItems and the Annotations."],["ImportDataOperationMetadata","Runtime operation information for [DatasetService.ImportData][google.cloud.aiplatform.v1beta1.DatasetService.ImportData]."],["ImportDataRequest","Request message for [DatasetService.ImportData][google.cloud.aiplatform.v1beta1.DatasetService.ImportData]."],["ImportDataResponse","Response message for [DatasetService.ImportData][google.cloud.aiplatform.v1beta1.DatasetService.ImportData]."],["InputDataConfig","Specifies AI Platform owned input data to be used for training, and possibly evaluating, the Model."],["IntegratedGradientsAttribution","An attribution method that computes the Aumann-Shapley value taking advantage of the model's fully differentiable structure. Refer to this paper for more details: https://arxiv.org/abs/1703.01365"],["ListAnnotationsRequest","Request message for [DatasetService.ListAnnotations][google.cloud.aiplatform.v1beta1.DatasetService.ListAnnotations]."],["ListAnnotationsResponse","Response message for [DatasetService.ListAnnotations][google.cloud.aiplatform.v1beta1.DatasetService.ListAnnotations]."],["ListBatchPredictionJobsRequest","Request message for [JobService.ListBatchPredictionJobs][google.cloud.aiplatform.v1beta1.JobService.ListBatchPredictionJobs]."],["ListBatchPredictionJobsResponse","Response message for [JobService.ListBatchPredictionJobs][google.cloud.aiplatform.v1beta1.JobService.ListBatchPredictionJobs]"],["ListCustomJobsRequest","Request message for [JobService.ListCustomJobs][google.cloud.aiplatform.v1beta1.JobService.ListCustomJobs]."],["ListCustomJobsResponse","Response message for [JobService.ListCustomJobs][google.cloud.aiplatform.v1beta1.JobService.ListCustomJobs]"],["ListDataItemsRequest","Request message for [DatasetService.ListDataItems][google.cloud.aiplatform.v1beta1.DatasetService.ListDataItems]."],["ListDataItemsResponse","Response message for [DatasetService.ListDataItems][google.cloud.aiplatform.v1beta1.DatasetService.ListDataItems]."],["ListDataLabelingJobsRequest","Request message for [DataLabelingJobService.ListDataLabelingJobs][]."],["ListDataLabelingJobsResponse","Response message for [JobService.ListDataLabelingJobs][google.cloud.aiplatform.v1beta1.JobService.ListDataLabelingJobs]."],["ListDatasetsRequest","Request message for [DatasetService.ListDatasets][google.cloud.aiplatform.v1beta1.DatasetService.ListDatasets]."],["ListDatasetsResponse","Response message for [DatasetService.ListDatasets][google.cloud.aiplatform.v1beta1.DatasetService.ListDatasets]."],["ListEndpointsRequest","Request message for [EndpointService.ListEndpoints][google.cloud.aiplatform.v1beta1.EndpointService.ListEndpoints]."],["ListEndpointsResponse","Response message for [EndpointService.ListEndpoints][google.cloud.aiplatform.v1beta1.EndpointService.ListEndpoints]."],["ListHyperparameterTuningJobsRequest","Request message for [JobService.ListHyperparameterTuningJobs][google.cloud.aiplatform.v1beta1.JobService.ListHyperparameterTuningJobs]."],["ListHyperparameterTuningJobsResponse","Response message for [JobService.ListHyperparameterTuningJobs][google.cloud.aiplatform.v1beta1.JobService.ListHyperparameterTuningJobs]"],["ListModelEvaluationSlicesRequest","Request message for [ModelService.ListModelEvaluationSlices][google.cloud.aiplatform.v1beta1.ModelService.ListModelEvaluationSlices]."],["ListModelEvaluationSlicesResponse","Response message for [ModelService.ListModelEvaluationSlices][google.cloud.aiplatform.v1beta1.ModelService.ListModelEvaluationSlices]."],["ListModelEvaluationsRequest","Request message for [ModelService.ListModelEvaluations][google.cloud.aiplatform.v1beta1.ModelService.ListModelEvaluations]."],["ListModelEvaluationsResponse","Response message for [ModelService.ListModelEvaluations][google.cloud.aiplatform.v1beta1.ModelService.ListModelEvaluations]."],["ListModelsRequest","Request message for [ModelService.ListModels][google.cloud.aiplatform.v1beta1.ModelService.ListModels]."],["ListModelsResponse","Response message for [ModelService.ListModels][google.cloud.aiplatform.v1beta1.ModelService.ListModels]"],["ListSpecialistPoolsRequest","Request message for [SpecialistPoolService.ListSpecialistPools][google.cloud.aiplatform.v1beta1.SpecialistPoolService.ListSpecialistPools]."],["ListSpecialistPoolsResponse","Response message for [SpecialistPoolService.ListSpecialistPools][google.cloud.aiplatform.v1beta1.SpecialistPoolService.ListSpecialistPools]."],["ListTrainingPipelinesRequest","Request message for [PipelineService.ListTrainingPipelines][google.cloud.aiplatform.v1beta1.PipelineService.ListTrainingPipelines]."],["ListTrainingPipelinesResponse","Response message for [PipelineService.ListTrainingPipelines][google.cloud.aiplatform.v1beta1.PipelineService.ListTrainingPipelines]"],["MachineSpec","Specification of a single machine."],["ManualBatchTuningParameters","Manual batch tuning parameters."],["Measurement","A message representing a Measurement of a Trial. A Measurement contains the Metrics got by executing a Trial using suggested hyperparameter values."],["MigratableResource","Represents one resource that exists in automl.googleapis.com, datalabeling.googleapis.com or ml.googleapis.com."],["MigrateResourceRequest","Config of migrating one resource from automl.googleapis.com, datalabeling.googleapis.com and ml.googleapis.com to AI Platform."],["MigrateResourceResponse","Describes a successfully migrated resource."],["Model","A trained machine learning Model."],["ModelContainerSpec","Specification of a container for serving predictions. This message is a subset of the Kubernetes Container v1 core specification."],["ModelEvaluation","A collection of metrics calculated by comparing Model's predictions on all of the test data against annotations from the test data."],["ModelEvaluationSlice","A collection of metrics calculated by comparing Model's predictions on a slice of the test data against ground truth annotations."],["ModelExplanation","Aggregated explanation metrics for a Model over a set of instances."],["Port","Represents a network port in a container."],["PredefinedSplit","Assigns input data to training, validation, and test sets based on the value of a provided key."],["PredictRequest","Request message for [PredictionService.Predict][google.cloud.aiplatform.v1beta1.PredictionService.Predict]."],["PredictResponse","Response message for [PredictionService.Predict][google.cloud.aiplatform.v1beta1.PredictionService.Predict]."],["PredictSchemata","Contains the schemata used in Model's predictions and explanations via [PredictionService.Predict][google.cloud.aiplatform.v1beta1.PredictionService.Predict], [PredictionService.Explain][google.cloud.aiplatform.v1beta1.PredictionService.Explain] and [BatchPredictionJob][google.cloud.aiplatform.v1beta1.BatchPredictionJob]."],["PythonPackageSpec","The spec of a Python packaged code."],["ResourcesConsumed","Statistics information about resource consumption."],["SampleConfig","Active learning data sampling config. For every active learning labeling iteration, it will select a batch of data based on the sampling strategy."],["SampledShapleyAttribution","An attribution method that approximates Shapley values for features that contribute to the label being predicted. A sampling strategy is used to approximate the value rather than considering all subsets of features."],["Scheduling","All parameters related to queuing and scheduling of custom jobs."],["SearchMigratableResourcesRequest","Request message for [MigrationService.SearchMigratableResources][google.cloud.aiplatform.v1beta1.MigrationService.SearchMigratableResources]."],["SearchMigratableResourcesResponse","Response message for [MigrationService.SearchMigratableResources][google.cloud.aiplatform.v1beta1.MigrationService.SearchMigratableResources]."],["SmoothGradConfig","Config for SmoothGrad approximation of gradients."],["SpecialistPool","SpecialistPool represents customers' own workforce to work on their data labeling jobs. It includes a group of specialist managers who are responsible for managing the labelers in this pool as well as customers' data labeling jobs associated with this pool. Customers create specialist pool as well as start data labeling jobs on Cloud, managers and labelers work with the jobs using CrowdCompute console."],["StudySpec","Represents specification of a Study."],["TimestampSplit","Assigns input data to training, validation, and test sets based on a provided timestamps. The youngest data pieces are assigned to training set, next to validation set, and the oldest to the test set."],["TrainingConfig","CMLE training config. For every active learning labeling iteration, system will train a machine learning model on CMLE. The trained model will be used by data sampling algorithm to select DataItems."],["TrainingPipeline","The TrainingPipeline orchestrates tasks associated with training a Model. It always executes the training task, and optionally may also export data from AI Platform's Dataset which becomes the training input, [upload][google.cloud.aiplatform.v1beta1.ModelService.UploadModel] the Model to AI Platform, and evaluate the Model."],["Trial","A message representing a Trial. A Trial contains a unique set of Parameters that has been or will be evaluated, along with the objective metrics got by running the Trial."],["UndeployModelOperationMetadata","Runtime operation information for [EndpointService.UndeployModel][google.cloud.aiplatform.v1beta1.EndpointService.UndeployModel]."],["UndeployModelRequest","Request message for [EndpointService.UndeployModel][google.cloud.aiplatform.v1beta1.EndpointService.UndeployModel]."],["UndeployModelResponse","Response message for [EndpointService.UndeployModel][google.cloud.aiplatform.v1beta1.EndpointService.UndeployModel]."],["UpdateDatasetRequest","Request message for [DatasetService.UpdateDataset][google.cloud.aiplatform.v1beta1.DatasetService.UpdateDataset]."],["UpdateEndpointRequest","Request message for [EndpointService.UpdateEndpoint][google.cloud.aiplatform.v1beta1.EndpointService.UpdateEndpoint]."],["UpdateModelRequest","Request message for [ModelService.UpdateModel][google.cloud.aiplatform.v1beta1.ModelService.UpdateModel]."],["UpdateSpecialistPoolOperationMetadata","Runtime operation metadata for [SpecialistPoolService.UpdateSpecialistPool][google.cloud.aiplatform.v1beta1.SpecialistPoolService.UpdateSpecialistPool]."],["UpdateSpecialistPoolRequest","Request message for [SpecialistPoolService.UpdateSpecialistPool][google.cloud.aiplatform.v1beta1.SpecialistPoolService.UpdateSpecialistPool]."],["UploadModelOperationMetadata","Details of [ModelService.UploadModel][google.cloud.aiplatform.v1beta1.ModelService.UploadModel] operation."],["UploadModelRequest","Request message for [ModelService.UploadModel][google.cloud.aiplatform.v1beta1.ModelService.UploadModel]."],["UploadModelResponse","Response message of [ModelService.UploadModel][google.cloud.aiplatform.v1beta1.ModelService.UploadModel] operation."],["UserActionReference","References an API call. It contains more information about long running operation and Jobs that are triggered by the API call."],["WorkerPoolSpec","Represents the spec of a worker pool in a job."],["XraiAttribution","An explanation method that redistributes Integrated Gradients attributions to segmented regions, taking advantage of the model's fully differentiable structure. Refer to this paper for more details: https://arxiv.org/abs/1906.02825"]]});