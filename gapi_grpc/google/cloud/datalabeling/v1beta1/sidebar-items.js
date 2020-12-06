initSidebarItems({"enum":[["AnnotationSentiment",""],["AnnotationSource","Specifies where the annotation comes from (whether it was provided by a human labeler or a different source)."],["AnnotationType",""],["DataType",""],["StringAggregationType",""]],"mod":[["annotated_dataset_metadata",""],["annotation_value",""],["confusion_matrix",""],["data_item",""],["data_labeling_service_client","Generated client implementations."],["evaluation_config",""],["evaluation_job",""],["evaluation_job_config",""],["evaluation_metrics",""],["example",""],["image_bounding_poly_annotation",""],["image_polyline_annotation",""],["input_config",""],["label_image_request",""],["label_operation_metadata",""],["label_text_request",""],["label_video_request",""],["object_tracking_frame",""],["output_config",""],["pr_curve",""],["search_example_comparisons_response",""],["video_classification_config",""]],"struct":[["AnnotatedDataset","AnnotatedDataset is a set holding annotations for data in a Dataset. Each labeling task will generate an AnnotatedDataset under the Dataset that the task is requested for."],["AnnotatedDatasetMetadata","Metadata on AnnotatedDataset."],["Annotation","Annotation for Example. Each example may have one or more annotations. For example in image classification problem, each image might have one or more labels. We call labels binded with this image an Annotation."],["AnnotationMetadata","Additional information associated with the annotation."],["AnnotationSpec","Container of information related to one possible annotation that can be used in a labeling task. For example, an image classification task where images are labeled as `dog` or `cat` must reference an AnnotationSpec for `dog` and an AnnotationSpec for `cat`."],["AnnotationSpecSet","An AnnotationSpecSet is a collection of label definitions. For example, in image classification tasks, you define a set of possible labels for images as an AnnotationSpecSet. An AnnotationSpecSet is immutable upon creation."],["AnnotationValue","Annotation value for an example."],["Attempt","Records a failed evaluation job run."],["BigQuerySource","The BigQuery location for input data. If used in an [EvaluationJob][google.cloud.datalabeling.v1beta1.EvaluationJob], this is where the service saves the prediction input and output sampled from the model version."],["BoundingBoxEvaluationOptions","Options regarding evaluation between bounding boxes."],["BoundingPoly","A bounding polygon in the image."],["BoundingPolyConfig","Config for image bounding poly (and bounding box) human labeling task."],["ClassificationMetadata","Metadata for classification annotations."],["ClassificationMetrics","Metrics calculated for a classification model."],["ConfusionMatrix","Confusion matrix of the model running the classification. Only applicable when the metrics entry aggregates multiple labels. Not applicable when the entry is for a single label."],["CreateAnnotationSpecSetRequest","Request message for CreateAnnotationSpecSet."],["CreateDatasetRequest","Request message for CreateDataset."],["CreateEvaluationJobRequest","Request message for CreateEvaluationJob."],["CreateInstructionMetadata","Metadata of a CreateInstruction operation."],["CreateInstructionRequest","Request message for CreateInstruction."],["CsvInstruction","Deprecated: this instruction format is not supported any more. Instruction from a CSV file."],["DataItem","DataItem is a piece of data, without annotation. For example, an image."],["Dataset","Dataset is the resource to hold your data. You can request multiple labeling tasks for a dataset while each one will generate an AnnotatedDataset."],["DeleteAnnotatedDatasetRequest","Request message for DeleteAnnotatedDataset."],["DeleteAnnotationSpecSetRequest","Request message for DeleteAnnotationSpecSet."],["DeleteDatasetRequest","Request message for DeleteDataset."],["DeleteEvaluationJobRequest","Request message DeleteEvaluationJob."],["DeleteInstructionRequest","Request message for DeleteInstruction."],["Evaluation","Describes an evaluation between a machine learning model's predictions and ground truth labels. Created when an [EvaluationJob][google.cloud.datalabeling.v1beta1.EvaluationJob] runs successfully."],["EvaluationConfig","Configuration details used for calculating evaluation metrics and creating an [Evaluation][google.cloud.datalabeling.v1beta1.Evaluation]."],["EvaluationJob","Defines an evaluation job that runs periodically to generate [Evaluations][google.cloud.datalabeling.v1beta1.Evaluation]. Creating an evaluation job is the starting point for using continuous evaluation."],["EvaluationJobAlertConfig","Provides details for how an evaluation job sends email alerts based on the results of a run."],["EvaluationJobConfig","Configures specific details of how a continuous evaluation job works. Provide this configuration when you create an EvaluationJob."],["EvaluationMetrics",""],["EventConfig","Config for video event human labeling task."],["Example","An Example is a piece of data and its annotation. For example, an image with label \"house\"."],["ExportDataOperationMetadata","Metadata of an ExportData operation."],["ExportDataOperationResponse","Response used for ExportDataset longrunning operation."],["ExportDataRequest","Request message for ExportData API."],["GcsDestination","Export destination of the data.Only gcs path is allowed in output_uri."],["GcsFolderDestination","Export folder destination of the data."],["GcsSource","Source of the Cloud Storage file to be imported."],["GetAnnotatedDatasetRequest","Request message for GetAnnotatedDataset."],["GetAnnotationSpecSetRequest","Request message for GetAnnotationSpecSet."],["GetDataItemRequest","Request message for GetDataItem."],["GetDatasetRequest","Request message for GetDataSet."],["GetEvaluationJobRequest","Request message for GetEvaluationJob."],["GetEvaluationRequest","Request message for GetEvaluation."],["GetExampleRequest","Request message for GetExample"],["GetInstructionRequest","Request message for GetInstruction."],["HumanAnnotationConfig","Configuration for how human labeling task should be done."],["ImageBoundingPolyAnnotation","Image bounding poly annotation. It represents a polygon including bounding box in the image."],["ImageClassificationAnnotation","Image classification annotation definition."],["ImageClassificationConfig","Config for image classification human labeling task."],["ImagePayload","Container of information about an image."],["ImagePolylineAnnotation","A polyline for the image annotation."],["ImageSegmentationAnnotation","Image segmentation annotation."],["ImportDataOperationMetadata","Metadata of an ImportData operation."],["ImportDataOperationResponse","Response used for ImportData longrunning operation."],["ImportDataRequest","Request message for ImportData API."],["InputConfig","The configuration of input data, including data type, location, etc."],["Instruction","Instruction of how to perform the labeling task for human operators. Currently only PDF instruction is supported."],["LabelImageBoundingBoxOperationMetadata","Details of a LabelImageBoundingBox operation metadata."],["LabelImageBoundingPolyOperationMetadata","Details of LabelImageBoundingPoly operation metadata."],["LabelImageClassificationOperationMetadata","Metadata of a LabelImageClassification operation."],["LabelImageOrientedBoundingBoxOperationMetadata","Details of a LabelImageOrientedBoundingBox operation metadata."],["LabelImagePolylineOperationMetadata","Details of LabelImagePolyline operation metadata."],["LabelImageRequest","Request message for starting an image labeling task."],["LabelImageSegmentationOperationMetadata","Details of a LabelImageSegmentation operation metadata."],["LabelOperationMetadata","Metadata of a labeling operation, such as LabelImage or LabelVideo. Next tag: 20"],["LabelStats","Statistics about annotation specs."],["LabelTextClassificationOperationMetadata","Details of a LabelTextClassification operation metadata."],["LabelTextEntityExtractionOperationMetadata","Details of a LabelTextEntityExtraction operation metadata."],["LabelTextRequest","Request message for LabelText."],["LabelVideoClassificationOperationMetadata","Details of a LabelVideoClassification operation metadata."],["LabelVideoEventOperationMetadata","Details of a LabelVideoEvent operation metadata."],["LabelVideoObjectDetectionOperationMetadata","Details of a LabelVideoObjectDetection operation metadata."],["LabelVideoObjectTrackingOperationMetadata","Details of a LabelVideoObjectTracking operation metadata."],["LabelVideoRequest","Request message for LabelVideo."],["ListAnnotatedDatasetsRequest","Request message for ListAnnotatedDatasets."],["ListAnnotatedDatasetsResponse","Results of listing annotated datasets for a dataset."],["ListAnnotationSpecSetsRequest","Request message for ListAnnotationSpecSets."],["ListAnnotationSpecSetsResponse","Results of listing annotation spec set under a project."],["ListDataItemsRequest","Request message for ListDataItems."],["ListDataItemsResponse","Results of listing data items in a dataset."],["ListDatasetsRequest","Request message for ListDataset."],["ListDatasetsResponse","Results of listing datasets within a project."],["ListEvaluationJobsRequest","Request message for ListEvaluationJobs."],["ListEvaluationJobsResponse","Results for listing evaluation jobs."],["ListExamplesRequest","Request message for ListExamples."],["ListExamplesResponse","Results of listing Examples in and annotated dataset."],["ListInstructionsRequest","Request message for ListInstructions."],["ListInstructionsResponse","Results of listing instructions under a project."],["NormalizedBoundingPoly","Normalized bounding polygon."],["NormalizedPolyline","Normalized polyline."],["NormalizedVertex","A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1."],["ObjectDetectionConfig","Config for video object detection human labeling task. Object detection will be conducted on the images extracted from the video, and those objects will be labeled with bounding boxes. User need to specify the number of images to be extracted per second as the extraction frame rate."],["ObjectDetectionMetrics","Metrics calculated for an image object detection (bounding box) model."],["ObjectTrackingConfig","Config for video object tracking human labeling task."],["ObjectTrackingFrame","Video frame level annotation for object detection and tracking."],["OperatorMetadata","General information useful for labels coming from contributors."],["OutputConfig","The configuration of output data."],["PauseEvaluationJobRequest","Request message for PauseEvaluationJob."],["PdfInstruction","Instruction from a PDF file."],["Polyline","A line with multiple line segments."],["PolylineConfig","Config for image polyline human labeling task."],["PrCurve",""],["ResumeEvaluationJobRequest","Request message ResumeEvaluationJob."],["SearchEvaluationsRequest","Request message for SearchEvaluation."],["SearchEvaluationsResponse","Results of searching evaluations."],["SearchExampleComparisonsRequest","Request message of SearchExampleComparisons."],["SearchExampleComparisonsResponse","Results of searching example comparisons."],["SegmentationConfig","Config for image segmentation"],["SentimentConfig","Config for setting up sentiments."],["SequentialSegment","Start and end position in a sequence (e.g. text segment)."],["TextClassificationAnnotation","Text classification annotation."],["TextClassificationConfig","Config for text classification human labeling task."],["TextEntityExtractionAnnotation","Text entity extraction annotation."],["TextEntityExtractionConfig","Config for text entity extraction human labeling task."],["TextMetadata","Metadata for the text."],["TextPayload","Container of information about a piece of text."],["TimeSegment","A time period inside of an example that has a time dimension (e.g. video)."],["UpdateEvaluationJobRequest","Request message for UpdateEvaluationJob."],["Vertex","A vertex represents a 2D point in the image. NOTE: the vertex coordinates are in the same scale as the original image."],["VideoClassificationAnnotation","Video classification annotation."],["VideoClassificationConfig","Config for video classification human labeling task. Currently two types of video classification are supported:"],["VideoEventAnnotation","Video event annotation."],["VideoObjectTrackingAnnotation","Video object tracking annotation."],["VideoPayload","Container of information of a video."],["VideoThumbnail","Container of information of a video thumbnail."]]});