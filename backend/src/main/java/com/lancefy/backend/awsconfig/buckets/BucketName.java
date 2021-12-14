package com.lancefy.backend.awsconfig.buckets;

public enum BucketName {
    PROFILE_IMAGE("lancefy-images-storage");

    private final String bucketNanme;

    BucketName(String bucketName) {
        this.bucketNanme = bucketName;
    }

    public String getBucketNanme() {
        return bucketNanme;
    }
}
