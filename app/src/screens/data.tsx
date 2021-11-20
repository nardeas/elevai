import { sub } from 'date-fns';
import { clamp, range, sample, sampleSize } from 'lodash';
import React from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MdIcon from 'react-native-vector-icons/MaterialIcons';

export type Incident = {
  id: number;
  location: string;
  name: string;
  accuracy: number;
  features: any;
};

export type FeatureType =
  | 'speed'
  | 'load'
  | 'usage'
  | 'floors'
  | 'speed'
  | 'earea'
  | 'ecategory';

export type Feature = {
  id: number;
  label: string;
  type: FeatureType;
  value: number | string;
  icon: React.ReactNode;
};

export type MaintenanceEvent = {
  id: number;
  date: Date;
  status: 'Completed' | 'Irrelevant';
  flaggedMetrics: string[];
  technician: {
    avatar: any;
    name: string;
    phone: string;
  };
};

export const incidents: Incident[] = [
  {
    id: 1,
    location: 'Spektri Business Park',
    name: 'Elev X1',
    accuracy: 90,
    features: {},
  },
  {
    id: 2,
    location: 'Spektri Business Park',
    name: 'Elev X2',
    accuracy: 30,
    features: {},
  },
  {
    id: 3,
    location: 'Redi Shopping Center',
    name: 'Elev ZS4',
    accuracy: 40,
    features: {},
  },
  {
    id: 4,
    location: 'Redi Shopping Center',
    name: 'Elev ZS5',
    accuracy: 70,
    features: {},
  },
  {
    id: 5,
    location: 'Redi Shopping Center',
    name: 'Elev ZS6',
    accuracy: 20,
    features: {},
  },
  {
    id: 6,
    location: 'Tripla Shopping Center',
    name: 'Elev AV9',
    accuracy: 95,
    features: {},
  },
  {
    id: 7,
    location: 'Clarion Hotel',
    name: 'Elev XY3',
    accuracy: 25,
    features: {},
  },
];

const getFeatureValue = () => clamp(150 * Math.random(), 40, 150 - 10);

export const features: Feature[] = [
  {
    id: 1,
    type: 'speed',
    label: 'Speed',
    value: getFeatureValue(),
    icon: <MCIcon name="speedometer" size={18} color="#90d4ff" />,
  },
  {
    id: 2,
    type: 'load',
    label: 'Load',
    value: getFeatureValue(),
    icon: <MCIcon name="weight-gram" size={18} color="#90d4ff" />,
  },
  {
    id: 3,
    type: 'floors',
    label: 'Floors',
    value: getFeatureValue(),
    icon: <MCIcon name="format-list-numbered-rtl" size={18} color="#90d4ff" />,
  },
  {
    id: 4,
    type: 'usage',
    label: 'Usage',
    value: 'Heavy use',
    icon: <IonIcon name="md-download-outline" size={18} color="#90d4ff" />,
  },
  {
    id: 5,
    type: 'earea',
    label: 'Area',
    value: 'Lobby',
    icon: <MCIcon name="floor-plan" size={18} color="#90d4ff" />,
  },
  {
    id: 6,
    type: 'ecategory',
    label: 'Category',
    value: 'MiniSpace™ DX',
    icon: <MdIcon name="category" size={18} color="#90d4ff" />,
  },
];

const avatar1 = require('../assets/avatar1.jpg');
const avatar2 = require('../assets/avatar2.jpg');
const avatar3 = require('../assets/avatar3.jpg');
const avatars = [avatar1, avatar2, avatar3];
export const metrics = ['Metric 1', 'Metric 2', 'Metric 3'];

export const maintenanceHistory: MaintenanceEvent[] = range(5).map((i) => ({
  id: i,
  date: sub(new Date(), { weeks: i + 1 }),
  status: Math.random() > 0.5 ? 'Completed' : 'Irrelevant',
  flaggedMetrics:
    Math.random() > 0.5
      ? (sampleSize(metrics, 2) as string[])
      : ([sample(metrics)] as string[]),
  technician: {
    avatar: sample(avatars),
    name: 'John Doe',
    phone: '+1 (555) 555-5555',
  },
}));
