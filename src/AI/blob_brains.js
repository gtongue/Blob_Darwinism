import BlobNetwork from './blob_network';

class BlobBrains {
  constructor(blobs) {
    this.blobBrains = {};
    blobs.forEach(blob => this.addBlob(blob));
  }

  takeDecision(blob, input) {
    const blobBrain = this.blobBrains[blob.id];
    return blobBrain.takeDecision(input);
  }

  addBlob(blob) {
    this.blobBrains[blob.id] = new BlobNetwork(blob);
  }

  removeBlob(blob) {
    delete this.blobBrains[blob.id];
  }

  updateBlobs(blobs, totalTime) {
    blobs.forEach(blob => {
      this.blobBrains[blob.id].fitness = blob.size + totalTime;
    });
  }
}

export default BlobBrains;