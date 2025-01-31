variable "name" {
  description = "The cluster name, e.g cdn"
}

variable "regions" {
  description = "Regions to launch in"
  type = "list"
  default = ["AMS3", "FRA1", "LON1", "NYC3", "SFO2", "SGP1", "TOR1"]
}

variable "offset" {
  description = "Offset of node id"
  default = 0
}

variable "ssh_key" {
  description = "SSH key filename to copy to the nodes"
  type = "string"
}

variable "instance_size" {
  description = "The instance size to use"
  default = "s-2vcpu-4gb"
}

variable "volume_size" {
  description = "The size (in GB) of the volume to attach to each instance"
  default = 150
}

variable "servers" {
  description = "Desired instance count"
  default     = 4
}
