import BlobBrain from './blob_brain';

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
    this.blobBrains[blob.id] = new BlobBrain(blob);
  }

  removeBlob(blob) {
    delete this.blobBrains[blob.id];
  }

  updateBlobs(blobs, time) {
    blobs.forEach(blob => {
      this.blobBrains[blob.id].fitness = blob.size + (time / 100);
    });
  }
}

export default BlobBrains;