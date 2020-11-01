initSidebarItems({"enum":[["ContentType","Asset content type."]],"mod":[["analyze_iam_policy_response",""],["asset",""],["asset_service_client","Generated client implementations."],["feed_output_config",""],["gcs_destination",""],["iam_policy_analysis_output_config",""],["iam_policy_analysis_query",""],["iam_policy_analysis_result",""],["iam_policy_search_result",""],["output_config",""],["output_result",""],["partition_spec",""],["temporal_asset",""]],"struct":[["AnalyzeIamPolicyLongrunningRequest","A request message for [AssetService.AnalyzeIamPolicyLongrunning][google.cloud.asset.v1.AssetService.AnalyzeIamPolicyLongrunning]."],["AnalyzeIamPolicyLongrunningResponse","A response message for [AssetService.AnalyzeIamPolicyLongrunning][google.cloud.asset.v1.AssetService.AnalyzeIamPolicyLongrunning]."],["AnalyzeIamPolicyRequest","A request message for [AssetService.AnalyzeIamPolicy][google.cloud.asset.v1.AssetService.AnalyzeIamPolicy]."],["AnalyzeIamPolicyResponse","A response message for [AssetService.AnalyzeIamPolicy][google.cloud.asset.v1.AssetService.AnalyzeIamPolicy]."],["Asset","An asset in Google Cloud. An asset can be any resource in the Google Cloud resource hierarchy, a resource outside the Google Cloud resource hierarchy (such as Google Kubernetes Engine clusters and objects), or a policy (e.g. Cloud IAM policy). See Supported asset types for more information."],["BatchGetAssetsHistoryRequest","Batch get assets history request."],["BatchGetAssetsHistoryResponse","Batch get assets history response."],["BigQueryDestination","A BigQuery destination for exporting assets to."],["CreateFeedRequest","Create asset feed request."],["DeleteFeedRequest",""],["ExportAssetsRequest","Export asset request."],["ExportAssetsResponse","The export asset response. This message is returned by the [google.longrunning.Operations.GetOperation][google.longrunning.Operations.GetOperation] method in the returned [google.longrunning.Operation.response][google.longrunning.Operation.response] field."],["Feed","An asset feed used to export asset updates to a destinations. An asset feed filter controls what updates are exported. The asset feed must be created within a project, organization, or folder. Supported destinations are: Pub/Sub topics."],["FeedOutputConfig","Output configuration for asset feed destination."],["GcsDestination","A Cloud Storage location."],["GcsOutputResult","A Cloud Storage output result."],["GetFeedRequest","Get asset feed request."],["IamPolicyAnalysisOutputConfig","Output configuration for export IAM policy analysis destination."],["IamPolicyAnalysisQuery","IAM policy analysis query message."],["IamPolicyAnalysisResult","IAM Policy analysis result, consisting of one IAM policy binding and derived access control lists."],["IamPolicyAnalysisState","Represents the detailed state of an entity under analysis, such as a resource, an identity or an access."],["IamPolicySearchResult","A result of IAM Policy search, containing information of an IAM policy."],["ListFeedsRequest","List asset feeds request."],["ListFeedsResponse",""],["OutputConfig","Output configuration for export assets destination."],["OutputResult","Output result of export assets."],["PartitionSpec","Specifications of BigQuery partitioned table as export destination."],["PubsubDestination","A Pub/Sub destination."],["Resource","A representation of a Google Cloud resource."],["ResourceSearchResult","A result of Resource Search, containing information of a cloud resource."],["SearchAllIamPoliciesRequest","Search all IAM policies request."],["SearchAllIamPoliciesResponse","Search all IAM policies response."],["SearchAllResourcesRequest","Search all resources request."],["SearchAllResourcesResponse","Search all resources response."],["TemporalAsset","An asset in Google Cloud and its temporal metadata, including the time window when it was observed and its status during that window."],["TimeWindow","A time window specified by its `start_time` and `end_time`."],["UpdateFeedRequest","Update asset feed request."]]});